import React, { Component } from 'react';
import './customer.css';

class Customer extends React.Component {
    render() {
        return(
            <div className="customer common-content">
                <h1>Customers</h1>
                <div className="common-box">
                    <h3 className="text-center">Coming Soon</h3>
                    <p className="text-center">In eleifend, eros vitae tristique iaculis, ex justo congue diam, eget semper velit quam vel metus. Etiam mollis, elit aliquet blandit efficitur, turpis magna condimentum nulla, nec placerat massa erat sit amet tellus. Aenean mattis eros in neque congue vestibulum. Suspendisse accumsan nisi sit amet nunc placerat, vitae aliquet felis interdum.</p></div>
            </div>
        );
    }
}

export default Customer;