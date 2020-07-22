import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import './header.css';


class Header extends React.Component {
    render() {
        return (
            <header className="fixed-top">
                <ul className="float-right">
                    <li><p>Logout</p></li>
                </ul> 
            </header>
        );
    }
}

export default Header; 