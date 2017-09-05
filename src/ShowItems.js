import React, { Component, PropTypes } from 'react';
import { database } from './firebase';
import NewListItem from './NewListItem'

import map from 'lodash/map';

class ShowItems extends Component {
  constructor(props){
    super(props); 
    this.xRef = database.ref('/shopping_list')
                            .child(this.props.user.uid)
                            .child(this.props.appendTo);
                            
  // this.itemsRef = this.itemsRef.bind(this);
  }
  
  componentWillUnmount(){
    // console.log(this.props.listName);
    this.xRef.once("value", function(data){
      console.log(data)
    })
  }

// only show the items on the listName === itemsRef.name
  render () {
    var itemsArray = this.props.content;
    return (
      <div>
        <NewListItem 
          user={this.props.user}
          appendTo={this.props.appendTo}
          content={this.props.content}
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
