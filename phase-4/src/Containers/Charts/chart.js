import React, { Component } from 'react';
import './chart.css';
import LineChart from './Line/line';
import BarChart from './Bar/bar';
import DoughnutChart from './Doughnut/doughnut';
import BubbleChart from './Bubble/bubble';
import PieChart from './Pie/pie';
import MixChart from './Mix/mix';
import PolarChart from './Polar/polar';
import ScatterChart from './Scatter/scatter';
import RadrChart from './Radar/radar';

class Charts extends React.Component {
    render() {
        return (
            <div className="chartswrapper">
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <h3>Bar Chart</h3>
                        <div className="chart-box"> 
                            <BarChart/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <h3>Line Chart</h3>
                        <div className="chart-box">
                            <LineChart/>
                        </div>    
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <h3>Doughnut Chart</h3>
                        <div className="chart-box">
                            <DoughnutChart/> 
                        </div>    
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <h3>Mixed Chart</h3>
                        <div className="chart-box">
                            <MixChart/> 
                        </div>    
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <h3>Pie Chart</h3>
                        <div className="chart-box">
                            <PieChart/> 
                        </div>    
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <h3>Bubble Chart</h3>
                        <div className="chart-box">
                            <BubbleChart/> 
                        </div>    
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <h3>Polar Chart</h3>
                        <div className="chart-box">
                            <PolarChart/>
                        </div>    
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <h3>Scatter Chart</h3>
                        <div className="chart-box">
                            <ScatterChart/>
                        </div>    
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <h3>Radar Chart</h3>
                        <div className="chart-box">
                            <RadrChart/>
                        </div>    
                    </div>
                    
                                  
                </div>
            </div>
        )
    }
}

export default Charts;