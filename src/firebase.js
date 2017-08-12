import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAJDuGvzzynalAwH23Lxh8F9tYBZnFjXu0",
    authDomain: "bag-it-up-49697.firebaseapp.com",
    databaseURL: "https://bag-it-up-49697.firebaseio.com",
    projectId: "bag-it-up-49697",
    storageBucket: "",
    messagingSenderId: "484536466087"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();
export const anonymousAuthProvider = new firebase.auth.anonymousAuthProvider();
