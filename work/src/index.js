import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBD17UvM-YW3D9JNxXjb3AidYb1XpictZE",
  authDomain: "itvdn-project.firebaseapp.com",
  databaseURL: "https://itvdn-project.firebaseio.com",
  projectId: "itvdn-project",
  storageBucket: "itvdn-project.appspot.com",
  messagingSenderId: "452877534830",
  appId: "1:452877534830:web:be5894cf4b6a16f170087f"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
