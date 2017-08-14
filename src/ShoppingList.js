import React, { Component, PropTypes } from 'react';

class ShoppingList extends Component {
  render () {
    const { name, user, handleDelete, handleSelect } = this.props;
    return ( 
      <article>
        <h3>{ name }</h3>
        <button onClick={handleDelete}> Delete </button>
        <button onClick={handleSelect}>Select</button>
      </article>
    );
  }
}

ShoppingList.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.object,
  handleDelete: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};

export default ShoppingList;
