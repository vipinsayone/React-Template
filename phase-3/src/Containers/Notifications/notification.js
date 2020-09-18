import React, { Component } from 'react';
import './notification.css';

class Notification extends React.Component {
    render() {
        return(
            <div className="notifications common-content">
                <h1>Notifications</h1>
                <div className="common-box">
                    <h3 className="text-center">Coming Soon</h3>
                    <p className="text-center">Etiam lacinia magna vel eros dapibus finibus. Morbi metus justo, dapibus eget pellentesque sed, tempor porta mauris. Ut dapibus leo enim, sed lacinia ligula mollis at. In dictum faucibus tellus quis tincidunt. Quisque non elit imperdiet, tempus quam at, blandit nisl. Proin mattis lorem sed nulla mollis vulputate. Donec bibendum dictum tortor quis vulputate.</p>
                </div>
            </div>
        );
    }
}

export default Notification;