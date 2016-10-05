import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import _ from 'lodash'
import StockItem from './components/StockItem';
import AddStockForm from './components/AddStockForm';
import './App.css';
import Chart from './components/Chart';

class App extends Component {

  componentWillMount() {
    this.props.fetchStocks();
  }

  renderStocks() {
    return _.map(this.props.stocks, (stock, key) => {
      return <StockItem key={key} stock={stock} id={key} />
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.props.stocks && Object.keys(this.props.stocks).length !== 0
          ? <Chart data={this.props.stocks} />
          : 'Loading...'
        }
        <ul className="list-group">
          {this.renderStocks()}
        </ul>
        <AddStockForm onFormSubmit={this.handleFormSubmit} />
        <footer><p><a href="https://github.com/pdewouters">@pdewouters</a></p></footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {stocks: state.stocks};
}

export default connect(mapStateToProps, actions)(App);
