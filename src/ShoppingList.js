import React, { Component, PropTypes } from 'react';

class ShoppingList extends Component {
  render () {
    const { name, user, handleDelete } = this.props;
    return ( 
      <article>
        <h3>{ name }</h3>
        <button onClick={handleDelete} >Delete</button>
        <button>Select</button>
      </article>
    );
  }
}

ShoppingList.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.object,
  handleDelete: PropTypes.func.isRequired
};

export default ShoppingList;
