import React, { Component } from 'react';
import HighCharts from 'highcharts/highstock';

class Chart extends Component {
  stockOptions = {

    rangeSelector: {
        selected: 4
    },

    yAxis: {
        labels: {
            formatter: function () {
                return (this.value > 0 ? ' + ' : '') + this.value + '%';
            }
        },
        plotLines: [{
            value: 0,
            width: 2,
            color: 'silver'
        }]
    },

    plotOptions: {
        series: {
            compare: 'percent',
            showInNavigator: true
        }
    },

    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
        valueDecimals: 2,
        split: true
    },

    series: []
  };

  highchartsModules() {
    if (this.props.modules) {
      this.props.modules.forEach(function(module) {
        module(HighCharts);
      });
    }
  }

  componentDidMount() {
    this.stockOptions.series = Object.keys(this.props.data).map( key => {
      return this.props.data[key];
    });
    this.highchartsModules();
    this.chart = new HighCharts['stockChart' || "Chart"](
      'chart-container',
      this.stockOptions
    );
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps)

  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return (
      <div className="atomic-chart" id="chart-container"></div>
    );
  }
}

export default Chart;
