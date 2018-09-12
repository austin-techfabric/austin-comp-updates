import React, { Component } from 'react';
import AssessmentStudentView from './AssessmentStudentView';
import {Redirect} from 'react-router-dom';
import { context } from '../shared/Context';

class AssessmentStudentViewContainer extends Component {

    componentDidMount(){
        this.props.context.studentMethods.getStudentAssessmentById(this.props.match.params.id)
    }

    render() {
        const { student, user } = this.props.context
        return (
            <div className='assessment-student-view-container'>
                {this.props.context.user ? <AssessmentStudentView user={user} student={student} {...this.props}/> : <Redirect to='/' />}
            </div>
        );
    }
}

export default context(AssessmentStudentViewContainer);