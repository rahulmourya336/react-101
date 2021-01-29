import React, { Component } from 'react';
import InputComponent from './InputComponent/InputComponent';

class CheckoutPage extends Component {
    render() {
        return (
            <div className="CheckoutPage">
            <h1>Checkout page</h1>
            <InputComponent type="email" placeholder="Enter your email" label="email"/>
            </div>
        );
    }
}

export default CheckoutPage;