import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import AssessmentDisplay from './AssessmentDisplay';
import { staffContext } from '../shared/staffContext';

class AssessmentContainer extends Component {
    componentDidMount(){
        setTimeout(()=> {
            this.props.staffContext.studentMethods.getAssignmentsByCohort(this.props.staffContext.cohort || this.props.staffContext.user.assignedCohort, 'assessments')
            this.props.staffContext.studentMethods.getCohortStats('assessments', this.props.staffContext.cohort || this.props.staffContext.user.assignedCohort)
        }, 0)
    }
    render() {
        return (
            <div className='assessment-container'>
                {this.props.staffContext.user ? <AssessmentDisplay {...this.props}/> : <Redirect to='/' />}
            </div>
        );
    }
}

export default staffContext(AssessmentContainer);