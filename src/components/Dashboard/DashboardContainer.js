import React, { Component } from 'react';
import DashboardDisplay from './DashboardDisplay';
import {Redirect} from 'react-router-dom';
import {context} from '../shared/Context';

class DashboardContainer extends Component {
    constructor(props){
        super(props)

        this.props.context.studentMethods.getAssignmentsByCohort()
    }

    render() {
        return (
            <div className='dashboard-container'>
                {this.props.context.user ? <DashboardDisplay {...this.props}/> : <Redirect to='/' />}
            </div>
        );
    }
}

export default context(DashboardContainer);