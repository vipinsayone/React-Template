import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
  
//   DOGNUT CHART INITIALIZE 
  const data_doughnut = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
  };

class DoughnutChart extends React.Component {
    render() {
        return(
            <div>
                <Doughnut 
                    data={data_doughnut} 
                    width={100}
                    height={250} 
                    options={{
                        maintainAspectRatio: false
                    }}
                /> 
            </div>
        )
    }
}

export default DoughnutChart;