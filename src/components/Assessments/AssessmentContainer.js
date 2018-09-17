import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import AssessmentDisplay from './AssessmentDisplay';
import { context } from '../shared/Context';

class AssessmentContainer extends Component {
    componentDidMount(){
        this.props.context.studentMethods.getStudentsAssessments(this.props.context.cohort, true)
        this.props.context.studentMethods.getAssessmentCountByCohort();
    }
    render() {
        const { students } = this.props.context;
        return (
            <div className='assessment-container'>
                {this.props.context.user ? <AssessmentDisplay {...this.props} students={students}/> : <Redirect to='/' />}
            </div>
        );
    }
}

export default context(AssessmentContainer);