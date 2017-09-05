import React, { Component, PropTypes } from 'react';
import ShowItems from './ShowItems';
import { database } from './firebase';

class ShoppingList extends Component {
  constructor(props){
    super(props);
    this.state = {
      childVisible: false
    }
  }
/* Add conditional for listed items that also belong to the correct store to prevent unwanted items appearing under the wrong merchant */
  display(storeItems){
    for(var i=0; i<storeItems.length;i++){
      
    }
  }

  clicked(key, marketName){
    this.setState({childVisible: !this.state.childVisible});
    // if marketName is the same that the user is clicking on.... 
    // pass in those values to toggleItems(key, marketName);
    this.props.toggleItems(key, marketName); // shows items belonging to this market
  console.log(this.props.content);
    this.display(this.props.content);
    // this.setState({itemsToggled: !this.state.itemsToggled});
  }

  render () {
    const { name, user, handleDelete, appendTo } = this.props;
    return ( 
      <article>
        <h3>{ name }</h3>
        <button onClick={ handleDelete }> Delete </button>
        <button onClick={()=> this.clicked(appendTo, name)}> Select </button>
        {
          this.state.childVisible ?
            <ShowItems  user={this.props.user} 
                        appendTo={appendTo}
                        content={this.props.content}
            />
          : <span></span>
        }
      </article>
    );
  }
}

ShoppingList.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.object,
  appendTo: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default ShoppingList;
