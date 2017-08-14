import React, { Component, PropTypes } from 'react';
import ShowItems from './ShowItems';

class ShoppingList extends Component {
  constructor(props){
    super(props);
    this.state = {
      childVisible: false
    }
  }

  onClick() {
    this.setState({childVisible: !this.state.childVisible});
  }

  render () {
    const { name, user, handleDelete } = this.props;
    return ( 
      <article>
        <h3>{ name }</h3>
        <button onClick={ handleDelete }> Delete </button>
        <button onClick={()=> this.onClick()}> Select </button>
        {
        	this.state.childVisible
            ? <ShowItems />
            : null
        }
      </article>
    );
  }
}

ShoppingList.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.object,
  handleDelete: PropTypes.func.isRequired
};

export default ShoppingList;
