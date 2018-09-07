import React from 'react';
import StudentCard from '../shared/StudentCard';

const DashboardDisplay = (props) => {
    
    return (
        <div className='dashboard-display'>
            <div className='mapped-student-container'>
                <header>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Competencies Left</div>
                </header>
            {
                props.students.map((student) => {
                    return <StudentCard key={student.id} {...student} />
                })
            }
            </div>
        </div>
    );
};

export default DashboardDisplay;