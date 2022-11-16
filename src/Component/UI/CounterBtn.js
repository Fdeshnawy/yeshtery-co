import React, { Component } from "react";
import './CounterBtn.css'
class CounterBtn  extends Component {
  state = {
    count: 0
  };
  handleOnChange = (event) => {
    this.setState({ count: this.state.count + 1 });
  };
 
  handleOnDecreses = (event) => {
    if (this.state.count <= 0) {
      return;
    }
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="div-btn">
        <button className="plus" onClick={this.handleOnDecreses}>-</button>
       
       
        <div>{this.state.count}</div>
       
      
          <button className="plus" onClick={this.handleOnChange}>+</button>
        <div>
          
        </div>
      </div>
    );
  }
}

export default CounterBtn;
