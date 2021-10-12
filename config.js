import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyBz2HPG0Nl3jEA4nlHnwHeRvaQsp0ZdCK0",

  authDomain: "cycle-459c3.firebaseapp.com",

  projectId: "cycle-459c3",

  storageBucket: "cycle-459c3.appspot.com",

  messagingSenderId: "43309807123",

  appId: "1:43309807123:web:c59ba65b1bdfaa285071e6"

 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

