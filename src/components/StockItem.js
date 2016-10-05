import React, { Component } from 'react';

class Stock extends Component {
  render() {
    return (
      <div>{this.props.stock.name}</div>
    );
  }
}

export default Stock;
