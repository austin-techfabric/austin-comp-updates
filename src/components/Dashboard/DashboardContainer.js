import React, { Component } from 'react';
import DashboardDisplay from './DashboardDisplay';
import { Redirect } from 'react-router-dom';
import { staffContext } from '../shared/staffContext';

class DashboardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
        }

    }

    componentDidMount() {
        this.liveClock = setInterval(() => this.tick(), 1000);
        this.props.staffContext.studentMethods.getCohortStats(this.props.staffContext.assignmentType, this.props.staffContext.cohort)
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
                {this.props.staffContext.user ? <DashboardDisplay {...this.state} {...this.props}/> : <Redirect to='/' />}
            </div>
        );
    }
}

export default staffContext(DashboardContainer);