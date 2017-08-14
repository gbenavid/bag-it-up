import React, { Component, PropTypes } from 'react';
import ShoppingList from './ShoppingList';
import ShowItems from './ShowItems';
import map from 'lodash/map';

class ShoppingLists extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
 
  handleDelete(key) {
    const { shoppingListsRef } = this.props;
    shoppingListsRef.child(key).remove();
  }

  render () {
    const { shoppingLists, user } = this.props;
    return (
      <section>
          { map(shoppingLists, (shoppingList, key) => (
            <ShoppingList key={key} appendTo={key} user={user} {...shoppingList} handleDelete={ () => this.handleDelete(key) } />
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
