import React, { Component, PropTypes } from 'react';
import ShowItems from './ShowItems';
import { database } from './firebase';

class ShoppingList extends Component {
  constructor(props){
    super(props);
    this.state = {
      childVisible: false,
      newlyAppendedListItems: [],
      currentListName: ""
    }
    this.clicked = this.clicked.bind(this);
  }
  display(storeItemsArray, ref){
    var itemsToBeAdded = [];
    ref.on("value", function(snapshot){
      for(var i=0; i<snapshot.length-1;i+=1){
        var childData = snapshot[i].val().itemName;
        console.log(snapshot);
        itemsToBeAdded.push(childData);
      }
    })
  }

  clicked(key, marketName){
    this.setState({childVisible: !this.state.childVisible});
    this.setState({currentListName: marketName});
    this.props.toggleItems(key, marketName); // sets state of this.props.content
    var listRef = database.ref('/shopping_list').child(this.props.user.uid).child(key);
    this.display(this.props.content, listRef);
  }

  render () {
    const { name, user, handleDelete, appendTo } = this.props;
    const { ref } = database.ref('/shopping_list').child(user.uid).child(appendTo);
    return ( 
      <article>
        <h3>{ name }</h3>
            <button onClick={ handleDelete }> Delete </button>
            <button onClick={()=> this.clicked(appendTo, name)}> Select </button> 
        {
          this.state.childVisible ?
            <ShowItems  user={user} 
                        appendTo={appendTo}
                        content={this.props.content}
                        listName={name}
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
