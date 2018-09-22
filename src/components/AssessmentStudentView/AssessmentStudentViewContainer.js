import React, { Component } from 'react';
import AssessmentStudentView from './AssessmentStudentView';
import {Redirect} from 'react-router-dom';
import { staffContext } from '../shared/staffContext';

class AssessmentStudentViewContainer extends Component {

    componentDidMount(){
        this.props.staffContext.studentMethods.getStudentAssessmentById(this.props.match.params.id)
    }

    render() {
        return (
            <div className='assessment-student-view-container'>
                {this.props.staffContext.user ? <AssessmentStudentView {...this.props}/> : <Redirect to='/' />}
            </div>
        );
    }
}

export default staffContext(AssessmentStudentViewContainer);