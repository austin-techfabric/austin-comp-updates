import React from 'react';
import {Link} from 'react-router-dom'
import {Doughnut} from 'react-chartjs-2';

const StudentCard = (props) => {
    
    const data = {
        labels: [
            `Passed ${props.competencies_passed}`,
            `Remaining ${props.staffContext.fullCohortStats.length - props.competencies_passed}`,
        ],
        datasets: [{
            data: [parseInt((props.competencies_passed / props.staffContext.fullCohortStats.length * 100), 10), parseInt(((100 - props.competencies_passed / props.staffContext.fullCohortStats.length * 100)), 10)],
            backgroundColor: [
            'rgba(80, 169, 220, 0.7)',
            'rgb(150, 150, 150)',
            ],
            hoverBackgroundColor: [
            'rgba(65, 154, 205, 1)',
            'rgb(125, 125, 125)',
            ]
        }]
    };
    return (
        <Link to={`/student/${props.id}`}>
        <div className='student-card-container'>
            <span className='student-name'>{props.name}</span>
            <span className='student-email'>{props.email}</span>
            <div className='percentages-container'>
                <span className='comps-left'>{parseInt(((props.competencies_passed / props.staffContext.fullCohortStats.length * 100)), 10)}%</span>
                <Doughnut
                data={data}
                height={150}
                redraw = {true}
                options={{
                    maintainAspectRatio: true,
                    responsive: true,
                    animation: {
                        duration: 0
                    }
                }}
                />
            </div>
        </div>
        </Link>
    );
};

export default StudentCard;