import React, { Component, PropTypes } from 'react';
import { database } from './firebase';
import NewListItem from './NewListItem'
import map from 'lodash/map';

class ShowItems extends Component {
  constructor(props){
    super(props);
  }
  this.itemsRef = database.ref('');
  render () {
    return (
      <div>
        <NewListItem 
          user={this.props.user}
          appendTo={this.props.appendTo}
        />
      
        {/* map through all of the children in append to with the value of itemName*/}
      </div>
    );
  }
}

export default ShowItems;
