import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const MyChart = () => {

    const [series, setseries] = useState([{
        name: 'task Complition',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'ecosystem health',
        data: [11, 32, 45, 32, 34, 52, 41]
    }])

    const [options, setOptions] = useState({
        chart: { id: 'bar-chart' },
        xaxis: {
            categories: ["april", "may", "june", "july", "aug", "sep", "oct",],

        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 1,   
        }
    },)

    return (
        <div id="chart" style={{
            padding: '15px 15px',
            borderRadius: 10,
            border: '1px solid #ccc',
            paddingBottom:0
        }}>
            <Chart options={options} series={series} type="area" height={300} />
        </div>
    )
}

export default MyChart


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