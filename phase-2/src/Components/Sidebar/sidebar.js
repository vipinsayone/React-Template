import React, { Component } from 'react';
import './sidebar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

class Sidebar extends React.Component {
    render () {
        return (
            <div className="sidebar">
                <h2 className="text-uppercase text-center">React Demo</h2>
                <ul>
                    <li className="navitem"><NavLink to="/dashboard" activeClassName="active-nav" exact={true}>Dashboard</NavLink></li>
                    <li className="navitem"><NavLink to="/orders" activeClassName="active-nav">Orders</NavLink></li>
                    <li className="navitem"><NavLink to="/products" activeClassName="active-nav">Products</NavLink></li>
                    <li className="navitem"><NavLink to="/customers" activeClassName="active-nav">Customers</NavLink></li>
                    <li className="navitem"><NavLink to="/services" activeClassName="active-nav">Services</NavLink></li>
                    <li className="navitem"><NavLink to="/notifications" activeClassName="active-nav">Notifications</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;