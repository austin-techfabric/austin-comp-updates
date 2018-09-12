import React, { Component } from 'react';
import DashboardDisplay from './DashboardDisplay';
import {Redirect} from 'react-router-dom';
import {context} from '../shared/Context';

class DashboardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
        }

        this.props.context.studentMethods.getStudentsByCohort();
        this.props.context.studentMethods.getAssignmentsByCohort()
    }

    componentDidMount() {
        this.liveClock = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.liveClock);
    }


    tick = () => {
        this.setState({
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
        });
    }

    render() {
        return (
            <div className='dashboard-container'>
                {this.props.context.user ? <DashboardDisplay {...this.state} {...this.props}/> : <Redirect to='/' />}
            </div>
        );
    }
}

export default context(DashboardContainer);