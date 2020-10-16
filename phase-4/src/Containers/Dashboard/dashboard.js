import React, { Component } from 'react';
import './dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect
  } from "react-router-dom";

class Dashboard extends React.Component {
    render() {     
        return (
            <div className="dashboard">
                <div className="dash-info text-center">
                        <h1>Welcome to<br/>React Demo Dashboard</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed maximus enim. Pellentesque vestibulum mauris et neque ullamcorper ultrices. Aliquam velit libero, luctus ac dolor id, viverra egestas velit. Cras semper lectus et odio pellentesque feugiat.</p>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="col-box">
                            <h4><Link to="/orders">413</Link></h4>
                            <h3>Total Orders</h3>
                        </div>
                        
                    </div>
                    <div className="col-4">
                        <div className="col-box">
                            <h4><Link to="/products">1241</Link></h4>
                            <h3>Total Products</h3>
                        </div>
                        
                    </div>
                    <div className="col-4">
                        <div className="col-box">
                            <h4><Link to="/customers">347</Link></h4>
                            <h3>Total Customers</h3>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Dashboard;