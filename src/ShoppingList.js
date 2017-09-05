import React, { Component, PropTypes } from 'react';
import ShowItems from './ShowItems';
import { database } from './firebase';

class ShoppingList extends Component {
  constructor(props){
    super(props);
    this.state = {
      childVisible: false,
      newlyAppendedListItems: []
    }
    this.clicked = this.clicked.bind(this);
  }
/* Add conditional for listed items that also belong to the correct store to prevent unwanted items appearing under the wrong merchant */
  display(storeItemsArray, ref){
    var itemsToBeAdded = [];
    ref.on("value", function(snapshot){
      for(var i=0; i<snapshot.length-1;i+=1){
        var childData = snapshot[i].val().itemName;
        console.log(snapshot);
        itemsToBeAdded.push(childData);
      }
      // console.log(itemsToBeAdded);
        
        
        // if(itemsToBeAdded.includes(undefined)){
        //   itemsToBeAdded = itemsToBeAdded.splice(0, itemsToBeAdded.length-1);        
        // }
        // this.state.  = itemsToBeAdded;

      // this.setState({newlyAppendedListItems: itemsToBeAdded})
    })
      
    // console.log(this.state);
    // in your render statement you will pass your listedItems array into your ShowItems component
  }

  clicked(key, marketName){
    this.setState({childVisible: !this.state.childVisible});
    this.props.toggleItems(key, marketName); // sets state of this.props.content
    var listRef = database.ref('/shopping_list').child(this.props.user.uid).child(key); // which list/ market
    
    this.display(this.props.content, listRef);
    // set state here instead of inside display();
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
                        listName={this.props.name}
                        itemsRef={ref}
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
