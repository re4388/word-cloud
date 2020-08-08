import {firestoreLocationPath, firestoreFileName} from './config'
import {async} from 'regenerator-runtime';
const storage = firebase.app().storage(firestoreLocationPath);
const storageRef = storage.ref();
const listRef = storageRef.child(firestoreFileName);
import 'regenerator-runtime/runtime'


    /* TODO: currently, the storage security is set to no need to auth,
    in the future, if I need to add auth in other project, I need to
    add auth logic here */

const extractedData = async () => {
  const url = await listRef.getDownloadURL()
  const fetchedData = await fetch(url)
  const resText = await fetchedData.text()
  console.log(`check fetch data from firestore for first 1text00 character`,resText.substring(0,200));
  return resText
};


export { extractedData }

