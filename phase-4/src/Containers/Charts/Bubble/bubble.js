import React, { Component } from 'react';
import {Bubble} from 'react-chartjs-2';

const data = {
    labels: ['January'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [{x:10,y:20,r:5}]
      }
    ]
  };

class BubbleChart extends React.Component {
    render() {
        return(
            <div>
                <Bubble 
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

export default BubbleChart;