const { S3 } = require('aws-sdk')
const azure = require('azure-storage')
const { mapLimit } = require('async')

exports.handler = (event, context, callback) => {
  const {AZURE_ACCOUNT_NAME, AZURE_ACCOUNT_KEY, AZURE_SHARE_NAME} = process.env

  const fileService = azure.createFileService(AZURE_ACCOUNT_NAME, AZURE_ACCOUNT_KEY)
  const s3 = new S3()

  fileService.createShareIfNotExists(AZURE_SHARE_NAME, (err, result, response) => {
    if (err) {
      return callback(err)
    }

    const s3Files = event.Records.map(record => ({
      Key: decodeURIComponent(record.s3.object.key.replace(/\+/g, '%20')),
      Bucket: record.s3.bucket.name,
      size: record.s3.object.size
    }))

    const parallelUploads = 5
    mapLimit(
      s3Files,
      parallelUploads,
      (file, done) => {
        const params = {Key: file.Key, Bucket: file.Bucket}
        console.log(`Uploading ${JSON.stringify(params)} to Azure`)
        const sourceStream = s3.getObject(params).createReadStream()
        fileService.createFileFromStream(AZURE_SHARE_NAME, '', file.Key, sourceStream, file.size, done)
      },
      callback
    )
  })
}
