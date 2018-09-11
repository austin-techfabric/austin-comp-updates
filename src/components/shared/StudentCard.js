import React from 'react';
import {Link} from 'react-router-dom'
import {Doughnut} from 'react-chartjs-2';

const StudentCard = (props) => {
    
    const data = {
        labels: [
            `Passed ${props.competencies_passed}`,
            `Remaining ${33 - props.competencies_passed}`,
        ],
        datasets: [{
            data: [parseInt((props.competencies_passed / 33 * 100), 10), parseInt(((100 - props.competencies_passed / 33 * 100)), 10)],
            backgroundColor: [
            'rgb(4, 204, 4)',
            'rgb(204, 4, 4)',
            ],
            hoverBackgroundColor: [
            'rgb(4, 204, 4)',
            'rgb(204, 4, 4)',
            ]
        }]
    };

    return (
        <Link to={`/student/${props.id}`}>
        <div className='student-card-container'>
            <span className='student-name'>{props.name}</span>
            <span className='student-email'>{props.email}</span>
            <div className='percentages-container'>
                <span className='comps-left'>{parseInt(((props.competencies_passed / 33 * 100)), 10)}%</span>
                <Doughnut
                data={data}
                height={150}
                redraw = {true}
                options={{
                    maintainAspectRatio: true,
                    responsive: true
                }}
                />
            </div>
        </div>
        </Link>
    );
};

export default StudentCard;