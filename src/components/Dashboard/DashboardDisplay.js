import React from 'react';
import Overview from './OverView';

const DashboardDisplay = (props) => {
    const { student, user } = props.context
    return (
        <div className='dashboard-display-full-class'>
            <header>
                <div>
                    <h2>
                        <span className='dashboard-name'>{props.context.user.name}</span>
                        <span className='spacer'>|</span>
                        <span className='assigned-cohort'>{props.context.user.assignedCohort}</span>
                        <span className='spacer'>|</span>
                        <span>{props.context.user.position}</span>
                    </h2>
                </div>
        
                <div>
                    <h1>Dashboard</h1>
                </div>

                <div>
                   <h2>{`${props.date} - ${props.time}`}</h2>
                </div>
            </header>
            <div>
                <Overview user={user} student={student} {...props}/>
            </div>
            
        </div>
    );
};

export default DashboardDisplay;