import 'firebase/auth';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyD8y1HTm5CabGLDzpcrjwT8rrRMosaKsAk',
  authDomain: 'moveit-alvesrafa.firebaseapp.com',
  projectId: 'moveit-alvesrafa',
  storageBucket: 'moveit-alvesrafa.appspot.com',
  messagingSenderId: '570021951826',
  appId: '1:570021951826:web:3c2d065b53d554df4f628b',
  measurementId: 'G-E61B8DZKR9',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase;
