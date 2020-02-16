import firebase from 'firebase'
import firestore from 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBfRi1SEfcqijZ8Jw76ly0iM6LkAQsGGMU",
    authDomain: "udemy-ninja-smoothies-dff83.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-dff83.firebaseio.com",
    projectId: "udemy-ninja-smoothies-dff83",
    storageBucket: "udemy-ninja-smoothies-dff83.appspot.com",
    messagingSenderId: "326191634990",
    appId: "1:326191634990:web:05fe78a93a689071fbddbf"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
//   firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  // export firestore database
  export default firebaseApp.firestore();