import React from 'react';
import StudentAssessmentCard from './StudentAssessmentCard';

const AssessmentDisplay = (props) => {

    
    return (
        <div className='dashboard-display'>
            <div className='mapped-student-container'>
                <h1>Assessments</h1>
                <header>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Completion</div>
                </header>
                {
                props.staffContext.assignmentsByCohort
                .map((student) => {
                    return <StudentAssessmentCard key={student.id} {...props} {...student} />
                })
            }
            </div>
        </div>
    );

};

export default AssessmentDisplay;