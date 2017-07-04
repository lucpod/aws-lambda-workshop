# TODO






```
export BUCKET=your-unique-bucket-name
export STACK_NAME=timezone-conversion-api

rm -f src.zip && cd src && zip -r ../src.zip . && cd ..

aws cloudformation package --template-file template.yml --s3-bucket $BUCKET --output-template-file packaged-template.yml

aws cloudformation deploy --template-file packaged-template.yml --stack-name $STACK_NAME --capabilities CAPABILITY_IAM --parameter-overrides ApiKey=XXXX
```
