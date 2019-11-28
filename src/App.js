import React, { Component } from 'react'
import firebase from 'firebase'
//import logo from './logo.svg'
import './App.css'

class App extends Component {
   //Definiendo el estado.
   constructor() {
      super()
      this.state = {
         user: null
      }

      this.handleAuth = this.handleAuth.bind(this)
      this.handleLogout = this.handleLogout.bind(this)
   }

   componentWillMount() {
      firebase.auth().onAuthStateChanged((user) => {
         this.setState({
            user: user
         })
      })
   }

   //creando la funcion para loguearse con google.
   handleAuth() {
      const provider = new firebase.auth.GoogleAuthProvider()

      firebase
         .auth()
         .signInWithPopup(provider)
         .then((result) => console.log(`${result.user.email} ha iniciado sesion`))
         .catch((error) => console.log(`Error ${error.code}: ${error.message}`))
   }

   //creando la funcion para cerrar sesion.
   handleLogout() {
      firebase
         .auth()
         .signOut()
         .then((result) => console.log(`${result.user.email} ha cerrado sesion`))
         .catch((error) => console.log(`Error ${error.code}: ${error.message}`))
   }

   renderLoginInButton() {
      //Si el usuario esta logueado. si ... es distinto de null
      if (this.state.user) {
         return (
            <div>
               <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName} />
               <p>Hola {this.state.user.displayName}</p>
               <button onClick={this.handleLogout}>Cerrar sesion</button>
            </div>
         )
      } else {
         //si no esta logueado. invocaremos al boton que es para loguearse
         return <button onClick={this.handleAuth}>Login con Google</button>
      }
   }

   render() {
      return (
         <div className="App">
            <div className="App-header">
               <h2>Pseudogram</h2>
            </div>
            <p className="App-intro">
               {this.renderLoginInButton()}
               {/*<button onClick={this.handleAuth}>Login con Google</button>*/}
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
