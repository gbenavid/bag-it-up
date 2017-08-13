import React, { Component, PropTypes } from 'react';
import ShoppingList from './ShoppingList';
import map from 'lodash/map';

class ShoppingLists extends Component {
  render () {
    const { shoppingLists } = this.props;
    return (
      <section>
          { map(shoppingLists, (shoppingList, key) => <ShoppingList key={key}  {...shoppingList}/>) }
      </section>
    );
  }
}

ShoppingLists.propTypes = {
  shoppingListsRef: PropTypes.object,
  shoppingLists: PropTypes.object
};

export default ShoppingLists;
