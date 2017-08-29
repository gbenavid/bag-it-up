import React, { Component, PropTypes } from 'react';
import { database } from './firebase';

class NewShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    // .child(user.uid)
    this.shoppingListRef = database.ref('/shopping_list').child(props.user.uid);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.shoppingListRef.push({name: this.state.name });
  }

  render() {
    const { name } = this.state;

    return (
      <form>
        <input
          type="text"
          value={ name }
          placeholder="Name of List"
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
  restaurantsRef: PropTypes.object
};

export default NewShoppingList;
