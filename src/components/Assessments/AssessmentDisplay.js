import React from 'react';
import StudentAssessmentCard from './StudentAssessmentCard';

const AssessmentDisplay = (props) => {

    console.log(props.students)
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
                props.students.map((student) => {
                    return <StudentAssessmentCard key={student.id} {...student} />
                })
            }
            </div>
        </div>
    );

};

export default AssessmentDisplay;