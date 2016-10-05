import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Stock extends Component {
  render() {
    return (
      <div>{this.props.stock.name}<button onClick={this.props.deleteStock.bind(null,this.props.id)}>X</button></div>
    );
  }
}

export default connect(null, actions)(Stock);
