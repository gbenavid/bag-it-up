import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './Signin';
import NewShoppingList from './NewShoppingList';
import ShoppingLists from './ShoppingLists'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      shoppingLists: null
    };
    this.shoppingListRef = database.ref('/shopping_list');
  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => { 
      this.setState({ currentUser });

      this.shoppingListRef.on('value', (snapshot) => {
        this.setState({ shoppingLists: snapshot.val() })
      });
    })
  }

  render() {
    const { currentUser, shoppingLists } = this.state;
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
                <ShoppingLists shoppingLists={shoppingLists}/>
              </div>
            }
          </div>
      </div>
    );
  }
}

export default App;
