import React, { Component } from 'react';
import { context } from '../shared/Context';
import DashboardDisplay from './DashboardDisplay';

class DashboardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            cohort: this.props.context.user.assignedCohort,
            active: true
        }
    }
    componentDidMount(){

        this.props.context.studentMethods.getStudentsByCohort(this.state.cohort, this.state.active)
    }

    render() {

        console.log(this.props.context.user)

        const { students } = this.props.context;
        return (
            <div className='dashboard-container'>
                <DashboardDisplay students={students} />
            </div>
        );
    }
}

export default context(DashboardContainer)