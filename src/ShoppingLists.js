import React, { Component, PropTypes } from 'react';
import ShoppingList from './ShoppingList';
import ShowItems from './ShowItems';
import map from 'lodash/map';

class ShoppingLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.handleDelete = this.handleDelete.bind(this);
  }
 
  handleDelete(key) {
    const { shoppingListsRef } = this.props;
    shoppingListsRef.child(key).remove();
  }

  handleSelect(key) {
    const { shoppingListsRef } = this.props; // grab the ref in database
    console.log("Expand node: " + key);
    // update the state to show elements in this node
    // this.shouldHide.setState = false;
  }

    render () {
    const { shoppingLists, user } = this.props;
    return (
      <section>
          { map(shoppingLists, (shoppingList, key) => (
          <ShoppingList key={key}  user={user} {...shoppingList}      
            handleDelete={ () => this.handleDelete(key) } handleSelect={ () => this.handleSelect(key)}
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
