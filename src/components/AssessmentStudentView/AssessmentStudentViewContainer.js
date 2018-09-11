import React, { Component } from 'react';
import AssessmentStudentView from './AssessmentStudentView';
import { context } from '../shared/Context';

class AssessmentStudentViewContainer extends Component {

    componentDidMount(){
        this.props.context.studentMethods.getStudentAssessmentById(this.props.match.params.id)
    }

    render() {
        console.log(this.props.context.student)
        const { student, user } = this.props.context
        return (
            <div className='assessment-student-view-container'>
                <AssessmentStudentView user={user} student={student} {...this.props}/>
            </div>
        );
    }
}

export default context(AssessmentStudentViewContainer);