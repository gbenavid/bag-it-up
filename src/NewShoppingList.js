import React, { Component, PropTypes } from 'react';
import { database } from './firebase';

class NewShoppingList extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
    this.shoppingListRef = database.ref('/shopping_list');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.shoppingListRef.child(this.props.user.uid).push({name: this.state.name });
  }

  render() {
    const { name } = this.state;
    return (
      <form>
        <input
          type="text"
          value={ name }
          placeholder={this.props.placeholderAttribute}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button
          onClick={this.handleSubmit}
          disabled={!name}
        >
          Submit
        </button>
      </form>
    );
  }
}

NewShoppingList.propTypes = {
  shoppingListRef: PropTypes.object
};

export default NewShoppingList;
