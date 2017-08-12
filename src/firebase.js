import firebase from 'firebase'; // this it the SDK itself

const config = {
    apiKey: "AIzaSyAJDuGvzzynalAwH23Lxh8F9tYBZnFjXu0",
    authDomain: "bag-it-up-49697.firebaseapp.com",
    databaseURL: "https://bag-it-up-49697.firebaseio.com",
    projectId: "bag-it-up-49697",
    storageBucket: "",
    messagingSenderId: "484536466087"
};
firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export default firebase;
