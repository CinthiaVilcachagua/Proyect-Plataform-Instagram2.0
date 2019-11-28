import React, { Component } from 'react'
import firebase from 'firebase'
//import logo from './logo.svg'
import './App.css'

class App extends Component {
   //creando la funcion para loguearse con google.
   handleAuth() {
      const provider = new firebase.auth.GoogleAuthProvider()

      firebase
         .auth()
         .signInWithPopup(provider)
         .then((result) => console.log(`${result.user.email} ha iniciado sesion`))
         .catch((error) => console.log(`Error ${error.code}: ${error.message}`))
   }

   render() {
      return (
         <div className="App">
            <div className="App-header">
               <h2>Pseudogram</h2>
            </div>
            <p className="App-intro">
               <button onClick={this.handleAuth}>Login con Google</button>
            </p>
         </div>
      )
   }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App
