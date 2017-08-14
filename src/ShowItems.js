import React, { Component, PropTypes } from 'react';
import NewListItem from './NewListItem'

class ShowItems extends Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div>
        <NewListItem 
          user={this.props.user}
          appendTo={this.props.appendTo}
        />
        {/* map through all of the children nodes */}
      </div>
    );
  }
}

export default ShowItems;
