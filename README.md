# firebase-project

1. Init project

2. Install Firebase, Start itvdn-project, create database & init

* npm i firebase
* add project (without Google-Analytics)
* create Realtime Database in test-mode (https://itvdn-project.firebaseio.com/)
* firebase init

3. fix: database.rules.json - delete comments!

4. ADD Firebase to web-appliction (name: itvdn-project):
* check the box: set up hosting.
* npm install -g firebase-tools
* import * as firebase from 'firebase'
* IMPORT SDK-firebaseConfig to index.js

5. Connect firebase to the project (in App.js):
* import * as firebase from 'firebase'
* componentDidMount() {}
* const db = firebase.database()
* console.log(db)

6. Authorization: checking output of form data

7. use method "createUserWithEmailAndPassword", look at the Network in DevTools, and get an error 400.