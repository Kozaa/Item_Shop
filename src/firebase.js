import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDPZJjCjyZkvpuBvaMKGUcGn5QqHIAPdZs",
  authDomain: "item-shop-e39fe.firebaseapp.com",
  databaseURL: "https://item-shop-e39fe.firebaseio.com",
  projectId: "item-shop-e39fe",
  storageBucket: "item-shop-e39fe.appspot.com",
  messagingSenderId: "122584883664",
  appId: "1:122584883664:web:f9652d9e413679c429d9d5",
};

firebase.initializeApp(config);
export default firebase;
