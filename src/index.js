import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

firebase.initializeApp({
   apiKey: 'AIzaSyDNiFfu_YKFaNBZ4dEpvsio1hMxPEp6tBk',
   authDomain: 'app-pseudogram.firebaseapp.com',
   databaseURL: 'https://app-pseudogram.firebaseio.com',
   projectId: 'app-pseudogram',
   storageBucket: 'app-pseudogram.appspot.com',
   messagingSenderId: '201278992455',
   appId: '1:201278992455:web:6b0fd4b78b335f228b4162',
   measurementId: 'G-731WHZ9SDP'
})

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
