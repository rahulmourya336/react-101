import React, { Component } from 'react'

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('From Input method');
        return (
            <h1>100 days of react</h1>
        );
    }
}


export default Dashboard;