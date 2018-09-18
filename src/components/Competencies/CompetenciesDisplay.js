import React from 'react';
import StudentCard from '../shared/StudentCard';

const DashboardDisplay = (props) => {
    
    return (
        <div className='dashboard-display'>
            <div className='mapped-student-container'>
                <h1>Competencies</h1>
                <header>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Completion</div>
                </header>
            {
                props.students.map((student) => {
                    return <StudentCard key={student.id} {...props} {...student} />
                })
            }
            </div>
        </div>
    );
};

export default DashboardDisplay;