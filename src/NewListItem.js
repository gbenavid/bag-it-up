import React, { Component, PropTypes } from 'react';
import { database } from './firebase';

class NewListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: this.props.itemName
    };
    this.listItemRef = database.ref('/shopping_list').child(this.props.user.uid).child(this.props.appendTo);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('hitting handleSubmit()');
    event.preventDefault();
    console.log('preventing default');
    this.listItemRef.push({ itemName: this.state.itemName });
    console.log('success');
  }

  render() {
    const { itemName } = this.state;
    return (
      <form>
        <input 
          type="text"
          onChange={ (event)=> this.setState({ itemName: event.target.value })}
        />
        <button
          onClick={(e) => this.handleSubmit(e)} disabled={!itemName}
        >
          Submit
        </button>
      </form>
    );
  }
}

NewListItem.propTypes = {
  shoppingListRef: PropTypes.object
};

export default NewListItem;
