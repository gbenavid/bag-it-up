import React, { Component, PropTypes } from 'react';
import Item from './Item';

class LoopThroughItemsOnList extends Component {
  constructor(props) {
    super(props);
    // this.handleDelete = this.handleDelete.bind(this);
  }
 
  // handleDelete(key) {
  //   const { itemsRef } = this.props;
  //   itemsRef.child(key).remove();
  // }

  render () {

    var limit = this.props.content.length - 1; 
    return (
      <section>
        <ul>
        { 
          this.props.content.map( (item, id) => id != limit ?  
          <li>{item}</li> : <span/>
        )}
        </ul>
      </section>
    );
  }
}

LoopThroughItemsOnList.propTypes = {
  // content: PropTypes.object
  // itemsRef: PropTypes.object,
  // listOfItems: PropTypes.object
};

export default LoopThroughItemsOnList;
