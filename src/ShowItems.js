import React, { Component, PropTypes } from 'react';
import { database } from './firebase';
import NewListItem from './NewListItem'
import LoopThroughItemsOnList from './loopThroughItemsOnList';
import map from 'lodash/map';

class ShowItems extends Component {
  constructor(props){
    super(props); 
    this.itemsRef = database.ref('/shopping_list')
                            .child(this.props.user.uid)
                            .child(this.props.appendTo);
  }

  render () {
    var itemsArray = this.props.content;
    return (
      <div>
        <NewListItem 
          user={this.props.user}
          appendTo={this.props.appendTo}
        />
        <ul>
        {
          map(itemsArray, item =>(
            <li>{item}</li>
          ))
        }
        </ul>
      </div>
    );
  }
}

export default ShowItems;
