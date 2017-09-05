import React, { Component, PropTypes } from 'react';
import ShowItems from './ShowItems';

class ShoppingList extends Component {
  constructor(props){
    super(props);
    this.state = {
      childVisible: false
    }
  }
/* Add conditional for listed items that also belong to the correct store to prevent unwanted items appearing under the wrong merchant */
  display(storeItems){
    // listen for changes in state
      // set the state.
    // return an accurate updated array based on changes in state
  }

  clicked(key, marketName){
    this.setState({childVisible: !this.state.childVisible});
    this.props.toggleItems(key, marketName); // shows items belonging to this market
    this.display(this.props.content);
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
            <ShowItems  user={user} 
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
