import React, { Component } from "react";
import "./App.css";

class App extends Component {

  state = {
    address : ["an address ",],
    number : ["a number ",],
    currentAddress : "",
    currentNumber: ""
  }
recordAddressHandler = (event) => {
  console.log(event.target.value)
  let add = event.target.value
  this.setState({
    currentAddress : add
  })
}

addAddressHandler = () => {
  this.setState({
    address : [...this.state.address, this.state.currentAddress],
    currentAddress : ""
  })
}

recordNumberHandler = (event) => {
  console.log(event.target.value)
  let num = event.target.value
  this.setState({
    currentNumber : num
  })
}

addNumberHandler = () => {
  this.setState({
    number : [...this.state.number, this.state.currentNumber],
    currentNumber : ""
  })
}
  render() {
    return (
      <div className="app">
        <h1>Address Book</h1>
        <div className="addressInput">
        <input
          type="text"
          onChange={this.recordAddressHandler}
          value={this.state.currentAddress}
        />
        <button onClick={this.addAddressHandler}>Add Address</button>
        <ul>{this.state.address}</ul>
        </div>
        <div className="numberInput">
        <input
          type="number"
          onChange={this.recordNumberHandler}
          value={this.state.currentNumber}
        />
        <button onClick={this.addNumberHandler}>Add Number</button>
        <ul>{this.state.number}</ul>
        </div>
      </div>
    );
  }
}

export default App;
