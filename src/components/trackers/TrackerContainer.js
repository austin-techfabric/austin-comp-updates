import React, { Component } from 'react';
import TrackerHeader from './TrackerHeader';
import EditAssessments from './EditAssignments';
import { context } from '../shared/Context';

class TrackerContainer extends Component {
    componentDidMount(){
        this.props.context.userMethods.getEditableAssignments();
        this.props.context.changeAssignmentEditableHandler('assignmentType', 'assessments');
    }
    render() {

        const {changeAssignmentEditableHandler,  assignmentType, assignments, userMethods} = this.props.context;
        return (
            <div className='tracker-container'>
                <TrackerHeader assignmentType={assignmentType} changeHandler={changeAssignmentEditableHandler} />
                <EditAssessments updateEditableAssignments={userMethods.updateEditableAssignments} assignmentType={assignmentType} assignments={assignments} />
            </div>
        );
    }
}

export default context(TrackerContainer)