import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }
  chartOptions: {};
  tableOptions: {};
  Highcharts = Highcharts;

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Historic and Estimated Worldwide Population Growth by Region'
      },
      subtitle: {
          text: 'Source: Wikipedia.org'
      },
      xAxis: {
          categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          title: {
              text: 'Billions'
          },
          labels: {
              formatter: function () {
                  return this.value / 1000;
              }
          }
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'Asia',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'Africa',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'Europe',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'America',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'Oceania',
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
  }
  this.tableOptions = {
    chart: {
      type: 'area'
  },
  title: {
      text: 'Area chart with negative values'
  },
  xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
  }, {
      name: 'Jane',
      data: [2, -2, -3, 2, 1]
  }, {
      name: 'Joe',
      data: [3, 4, 4, -2, 5]
  }]
  }
  }

}
