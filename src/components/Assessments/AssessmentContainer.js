import React, { Component } from 'react';
import AssessmentDisplay from './AssessmentDisplay';
import { context } from '../shared/Context';

class AssessmentContainer extends Component {
    componentDidMount(){
        this.props.context.studentMethods.getStudentsAssessments(this.props.context.cohort, true)
    }
    render() {
        const { students } = this.props.context;
        return (
            <div className='assessment-container'>
                <AssessmentDisplay students={students}/>
            </div>
        );
    }
}

export default context(AssessmentContainer);