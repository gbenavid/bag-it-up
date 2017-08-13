import React, { Component, PropTypes } from 'react';

class ShoppingList extends Component {
  render () {
    const { name, user, handleSelect, handleDeselect } = this.props;
    return (
      <article>
        <h3>{ name }</h3>
        <button>Delete</button>
        <button>Select</button>
      </article>
    );
  }
}

ShoppingList.propTypes = {
  name: PropTypes.string,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default ShoppingList;