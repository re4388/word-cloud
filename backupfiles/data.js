
// Get a reference to the storage service

import { firestoreLocationPath, firestoreFileName } from '../config'

const storage = firebase.app().storage(firestoreLocationPath);
const storageRef = storage.ref();
const listRef = storageRef.child(firestoreFileName);

const data =''


/* promised style */
// listRef.getDownloadURL().then(data => {
//   fetch(data)
//   .then(function(response) {
//     response.text().then(function(text) {
//       console.log(text);
//       // console.log(typeof text === 'string');
//       data += text
//     });
//   });
// });

aynsc (){
  const data = await listRef.getDownloadURL()
  const response = await fetch(data)
  const allText = await response.text()
  data += allText
}();

console.log(data);