import React, { Component, PropTypes } from 'react';
import { database } from './firebase';
import ShoppingList from './ShoppingList';
import ShowItems from './ShowItems';
import LoopThroughItemsOnList from './loopThroughItemsOnList';
import map from 'lodash/map';

class ShoppingLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listedItems: []
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.itemsListedRef = database.ref('/shopping_list').child(this.props.user.uid);//.child(this.props.placeToAppendTo);
  }

  handleDelete(key) {
    const { shoppingListsRef } = this.props;
    shoppingListsRef.child(key).remove();
  }
  componentWillMount(){

  }
  
  toggleItems(key, marketClicked){
    const properties = [];
    this.itemsListedRef.on("value", function(snapshot) {
      var marketObj = snapshot.val();
      var keysInMarketObj = Object.keys(marketObj);
      for(var i in keysInMarketObj){
        for(var j in marketObj[keysInMarketObj[i]]){
          if (marketObj[keysInMarketObj[i]].name ===  marketClicked ){
            properties.push(marketObj[keysInMarketObj[i]][j].itemName);
            // this.setState({listedItems: properties} );
          }
        }
      }
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
    this.setState({listedItems: properties} );
  }

  render () {
    const { shoppingLists, user, shoppingListsRef, properties } = this.props;
    return (
      <section>
        {map(shoppingLists, (shoppingList, key) => (
          
          <ShoppingList key={key} 
                        appendTo={key} 
                        user={user}
                        content={this.state.listedItems}
                        toggleItems={ () => this.toggleItems(key,shoppingList.name)}
                        handleDelete={ () => this.handleDelete(key)}
                        {...shoppingList}
          />
        ))}
      </section>
    );
  }
}

ShoppingLists.propTypes = {
  user: PropTypes.object,
  shoppingListsRef: PropTypes.object.isRequired,
  shoppingLists: PropTypes.object,
  itemsListedRef:PropTypes.object
};

export default ShoppingLists;
