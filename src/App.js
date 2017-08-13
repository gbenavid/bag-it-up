import React, { Component } from 'react';
import { auth } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './Signin';
import NewShoppingList from './NewShoppingList';
import map from 'lodash/map';


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
          <h2>Bag It Up!</h2>
        </div>
          <div>
            { !currentUser && <SignIn/> }
            { 
              currentUser && 
              <div>
                <NewShoppingList/>
                <CurrentUser user={currentUser} /> 
              </div>
            }
          </div>
      </div>
    );
  }
}

export default App;
