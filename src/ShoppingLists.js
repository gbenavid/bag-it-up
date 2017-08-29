import React, { Component, PropTypes } from 'react';
import { database } from './firebase';
import ShoppingList from './ShoppingList';
import map from 'lodash/map';

class ShoppingLists extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
      }

  handleDelete(key) {
    const { shoppingListsRef, user } = this.props;    
    // console.log(map(this.props.shoppingLists, (shoppingList, key) => (
    //   console.log(key)
    // )))
      console.log(shoppingListsRef.child(key));
      // shoppingListsRef.child(key).remove();
  }
    render () {
    const { shoppingListsRef, user } = this.props;
    return (
      <section>
          { map(shoppingListsRef, (shoppingList, key) => (
            <ShoppingList key={key} name={shoppingList.name} user={user} {...shoppingList}      
              handleDelete={ () => this.handleDelete(key)}
            />
          )) }
      </section>
    );
  }
}

ShoppingLists.propTypes = {
  user: PropTypes.object,
  shoppingListsRef: PropTypes.object.isRequired,
  shoppingLists: PropTypes.object
};

export default ShoppingLists;
