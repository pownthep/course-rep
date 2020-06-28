import firebase from 'firebase/app';
import "firebase/storage";

const config = {
    apiKey: "AIzaSyCFtrB-6Szx15_ZPU-m9hpDR0JWRWp0OzQ",
    authDomain: "course-rep.firebaseapp.com",
    databaseURL: "https://course-rep.firebaseio.com",
    projectId: "course-rep",
    storageBucket: "course-rep.appspot.com",
    messagingSenderId: "496798931240",
    appId: "1:496798931240:web:cc18d537fed42dfc11181d",
    measurementId: "G-G3Y38MJJPC",
};
 
class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.storage = firebase.storage();
    this.TaskState = firebase.storage.TaskState;
  }
}

export default Firebase;
 