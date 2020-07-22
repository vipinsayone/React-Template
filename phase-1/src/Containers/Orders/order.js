import React, { Component } from 'react';
import './order.css';

class Order extends React.Component {
    render() {
        return(
            <div className="order common-content">
                <h1>Orders</h1>
                <div className="common-box">
                    <h3 className="text-center">Coming Soon</h3>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed maximus enim. Pellentesque vestibulum mauris et neque ullamcorper ultrices. Aliquam velit libero, luctus ac dolor id, viverra egestas velit.</p>
                </div>
            </div>
        );
    }
}

export default Order;