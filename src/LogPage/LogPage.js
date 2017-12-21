import React, { Component } from 'react';
import firebase from 'firebase'
import SignUp from './SignUp'
import SignIn from './SignIn'

import './LogPage.css'

class LogPage extends Component {

  state = {
    user: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(
      user => this.setState({ user: user })
    )
  }

  handleSignOut = () => {
    firebase.auth().signOut()
  };

  render() {
    return (
      <div>
        <div><img src="pocketbook-min-org.png" alt="logo"/></div>
        <h1>Pocketbook</h1>
        {
          this.state.user === null ?
            <div>
              <SignUp/>
              <SignIn/>
            </div> :
            <div>
              Welcome to our app ! You will save money with Pocketbook !
              <button onClick={this.handleSignOut}>Sign out</button>
            </div>
        }

      </div>
    )
  }
}
export default LogPage;


