import Rebase from 're-base';
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC3HeSHa4k7GLTRC_aWeT07FQJkXXttitM",
  authDomain: "calculator-46300.firebaseapp.com",
  databaseURL: "https://calculator-46300.firebaseio.com",
  projectId: "calculator-46300",
  storageBucket: "calculator-46300.appspot.com",
  messagingSenderId: "916207385837"
});

const fbase = Rebase.createClass(firebaseApp.database());

export {fbase, firebaseApp};