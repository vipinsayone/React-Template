import React, { Component } from 'react';
import {Polar} from 'react-chartjs-2';

const data = {
    datasets: [{
      data: [
        11,
        16,
        7,
        3,
        14
      ],
      backgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#FFCE56',
        '#E7E9ED',
        '#36A2EB'
      ],
      label: 'My dataset' // for legend
    }],
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ]
};

class PolarChart extends React.Component {
    render() {
        return(
            <div>
                <Polar 
                    data={data} 
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

export default PolarChart;