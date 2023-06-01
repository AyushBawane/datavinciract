import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const MyBarChart = () => {

    const [series, setseries] = useState([{
        name: 'performance',
        data: [2.3, 3.1, 4.0, 10.1, 4.0,]
      }])

    const [options, setOptions] = useState({
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758","#ddd"]
          }
        },
        
        xaxis: {
          categories: ["mon", "tue", "wed", "thu", "fri"],
          position: 'botom',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: true
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          }
        
        },
        title: {
          text: 'weekly performance',
          floating: false,
          style: {
            color: '#000'
          }
        }
      },)

    return (
        <div id="chart" style={{
            padding: '15px 15px',
            borderRadius: 10,
            border: '1px solid #ccc',
            paddingBottom:0
        }}>
            <Chart options={options} series={series} type="bar" height={399} />
        </div>
    )
}

export default MyBarChart


// class ApexChart extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {

//             series: [{
//                 name: 'series1',
//                 data: [31, 40, 28, 51, 42, 109, 100]
//             }, {
//                 name: 'series2',
//                 data: [11, 32, 45, 32, 34, 52, 41]
//             }],
//             options: {
//                 chart: {
//                     height: 350,
//                     type: 'area'
//                 },
//                 dataLabels: {
//                     enabled: false
//                 },
//                 stroke: {
//                     curve: 'smooth'
//                 },
//                 xaxis: {
//                     type: 'datetime',
//                     categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
//                 },
//                 tooltip: {
//                     x: {
//                         format: 'dd/MM/yy HH:mm'
//                     },
//                 },
//             },


//         };
//     }



//     render() {
//         return (


//             <div id="chart">
//                 <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
//             </div>