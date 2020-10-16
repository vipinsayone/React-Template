import React, { Component } from 'react';
import './product.css';

class Product extends React.Component {
    render() {
        return(
                <div className="products common-content">
                    <h1>Products</h1>
                    <div className="common-box">
                        <h3 className="text-center">Coming Soon</h3>
                        <p className="text-center">Mauris vestibulum tortor non dapibus feugiat. Nam sollicitudin eget justo at efficitur. Aliquam ultrices est vel aliquet hendrerit. Suspendisse potenti. Vestibulum porta sem non egestas elementum. Donec ut justo non diam posuere maximus nec at quam. Aliquam id diam sit amet enim cursus mattis vel sit amet ligula.</p>
                    </div>
                </div>
        );
    }
}

export default Product;