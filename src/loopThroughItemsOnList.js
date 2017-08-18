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
    return (
      <section>
        {this.props.content.map( item => 
          <div>{item}</div>
        )}
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
