import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCe9YBkforxh05lF5F-vXShJuaPKiy3OU0',
  authDomain: 'social-454c2.firebaseapp.com',
  projectId: 'social-454c2',
  storageBucket: 'social-454c2.appspot.com',
  messagingSenderId: '339438435791',
  appId: '1:339438435791:web:1db4e71cfaa5b0dcffa6ba',
  measurementId: 'G-N9NR6K1V3C',
};

//	Initialize Firebase
firebase.initializeApp(firebaseConfig);

//	Initialize services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//	Timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
