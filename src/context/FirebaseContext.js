import React, { createContext } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import config from '../config/firebase';

const FirebaseContext = createContext();

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const Firebase = {
  createUser: async (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }, 

  logIn: async (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
};

const FirebaseProvider = props => {
  return <FirebaseContext.Provider value={Firebase}>{props.children}</FirebaseContext.Provider>
}

export { FirebaseContext, FirebaseProvider };
