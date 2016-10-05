import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { fetchData } from '../helpers/api';

class AddStockForm extends Component {
  state = { stock: '' };

  handleInputChange(event) {
    this.setState({ stock: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    fetchData(this.state.stock)
    .then( response => {
      this.props.createStock({
        name: this.state.stock,
        data: response.data.dataset.data.map(d => {
          return [new Date(d[0]).getTime(), d[1]];
        }).sort((a,b) => {
          return a[0] - b[0]
        })
      })
      this.setState({ stock: '' })
    })
  }

  render() {
    return (
      <div>
        <h4>add a stock</h4>
        <form onSubmit={this.handleFormSubmit.bind(this)} className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Add a stock"
              value={this.state.stock}
              onChange={this.handleInputChange.bind(this)} />
            <button action="submit" className="btn btn-primary">Create stock</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(AddStockForm);
