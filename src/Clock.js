import React, { Component } from 'react';
import ElevationBorder from './ElevationBosrder.js'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), cohort: 5 }
    }

    componentDidMount(){
        this.counter = setInterval(
            () => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval (this.counter);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    componentWillMount() {
        console.log(this.state.date.getFullYear());
        if (this.state.date.getFullYear()=== 2017) {
            this.setState({cohort: 6})
        } else if (this.state.date.getFullYear()=== 2018) {
            this.setState({cohort: 7})
        }
    }

    render() {
        if(this.state.cohort === 7) {
            return (
                <div>
                    <h1>Hello Cohort {this.state.cohort}!</h1>
                    <ElevationBorder>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                    </ElevationBorder>
                </div>
            );
        }else {
            return (
                <div>
                    <h1>Hello Cohort {this.state.cohort}!</h1>
                    <ElevationBorder>
                    <h2>There is nothing to show you</h2>
                    </ElevationBorder>
                </div>
            );
        }
    }
}

export default Clock;