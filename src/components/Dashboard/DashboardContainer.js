import React, { Component } from 'react';
import DashboardDisplay from './DashboardDisplay';
import { Redirect } from 'react-router-dom';
import { staffContext } from '../shared/staffContext';

class DashboardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date().toLocaleDateString()
        }

    }

    componentDidMount() {
        this.props.staffContext.studentMethods.getCohortStats(this.props.staffContext.assignmentType, this.props.staffContext.cohort)
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