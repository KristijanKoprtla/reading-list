import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCqPfbzIU0wGNXRrAS1yzoYz-inKp22XS8",
    authDomain: "readinglistapp-78f53.firebaseapp.com",
    projectId: "readinglistapp-78f53",
    storageBucket: "readinglistapp-78f53.appspot.com",
    messagingSenderId: "863389561313",
    appId: "1:863389561313:web:f2f7fe1458ae4cdecb62a0"
  };

  //init firebase
  initializeApp(firebaseConfig)

  //init firestore
  const db = getFirestore()

  //init firebase auth
  const auth = getAuth()
  export { db, auth }