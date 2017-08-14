import React, { Component, PropTypes } from 'react';

class ShowHide extends Component {
  getInitialState(){
      return { 
        childVisible: false
      }
	}
	onClick() {
    this.setState({childVisible: !this.state.childVisible});
  }
  render () {
    return (
      <div>
				<div onClick={this.onClick}>
					Parent - click me to show/hide my child
				</div>
				{
        	this.state.childVisible
            ? <Child />
            : null
        }
      </div>
    );
  }
}

export default ShowHide;
