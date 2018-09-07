import React from 'react';
import {Link} from 'react-router-dom'
import {Doughnut} from 'react-chartjs-2';

const StudentCard = (props) => {
    
    const data = {
        labels: [
            `Passed ${33 - props.competencies_left}`,
            `Remaining ${props.competencies_left}`,
        ],
        datasets: [{
            data: [(100 - props.competencies_left / 33 * 100).toFixed(2), (props.competencies_left / 33 * 100).toFixed(2)],
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
    console.log(this.donut)
    return (
        <Link to={`/student/${props.id}`}>
        <div className='student-card-container'>
            <span className='student-name'>{props.name}</span>
            <span className='student-email'>{props.email}</span>
            <div className='percentages-container'>
                <span className='comps-left'>{ (100 - props.competencies_left / 33 * 100).toFixed(2)}%</span>
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