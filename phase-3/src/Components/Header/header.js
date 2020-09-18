import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
import './header.css';


class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    logout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/');    // USING 'withRouter' FOR THIS
    }


    render() {
        return (
            <header className="fixed-top">
                <ul className="float-right">
                    <li><p onClick={()=> this.logout()}>Logout</p></li>
                </ul> 
            </header>
        );
    }
}

export default withRouter (Header); // USING withRouter FOR 'this.props.history.push'