import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './Signin';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => { 
      this.setState({ currentUser });
    })
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <div>
          <h2>Welcome to React</h2>
        </div>
          <div>
            { !currentUser && <SignIn/> }
            { currentUser && <CurrentUser user={currentUser} /> }
          </div>
      </div>
    );
  }
}

export default App;
