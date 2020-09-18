import React, { Component } from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return(
            <footer className="fixed-bottom">
                <div className="float-left">React Demo © 2020</div>
                <div className="float-right">Powered by&nbsp;<a href="">SayOne</a></div>
                <div className="clearfix"></div>
            </footer>
        );
    }
}

export default Footer;