# Dynamic Word Cloud

## About
- Use [pipeline dream](https://pipedream.com/) dream to continue scrap  @sue lee (one of my favorite indie singer on Youtube) from Twitter
- And then save to Google Doc Sheet (I use Google Doc sheet as My structure db for simple use and check data easily)
- Use another pipeline in [pipeline dream](https://pipedream.com/) to get all rows in Google Doc Sheet and save into txt in firebase storage
- Frontend code to `fetch` data from firebase storage and then use `wink-nlp-utils` and related tool to clean and tokenize data
- use `d3.cloud` to generate world cloud
- Parcel.js as bundle tool


[World Cloud DEMO](https://angular-82e48.web.app/)
## TODO
  - try other token? say only noun

## reference
- [Working with the filesystem in Node.js | Docs](https://docs.pipedream.com/workflows/steps/code/nodejs/working-with-files/#the-tmp-directory)
- [nodejs-storage/uploadFile.js at master · googleapis/nodejs-storage](https://github.com/googleapis/nodejs-storage/blob/master/samples/uploadFile.js)
- [node.js - Upload File to Firebase Storage using Admin SDK - Stack Overflow](https://stackoverflow.com/questions/55111346/upload-file-to-firebase-storage-using-admin-sdk)
- https://stackoverflow.com/questions/61488323/how-to-get-all-documents-from-a-collection-in-faunadb
- https://github.com/fauna/faunadb-js
- 

