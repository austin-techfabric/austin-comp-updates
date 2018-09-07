import React from 'react';
import incomplete from '../../styles/media/incomplete.svg'
import passed from '../../styles/media/pass.svg';

const StudentDisplay = (props) => {
    const compList = props.student.map(comp => {
        return <div className='comp-container'>
                    <div>{comp.category}</div>
                    <div>{comp.competency_name}</div>
                    <div>{comp.description}</div>
                    <div className='status-image-container'>{comp.passed ? <img src={passed}/> : <img src={incomplete}/>}</div>
                </div>
    })
    console.log(props.student)
    return (
    
        <div className='student-display'>
            {props.student[0] ?
            <div>
                <h1>{props.student[0].name} | {props.student[0].cohort}</h1>
                <h2>{props.student[0].email}</h2>
            </div>
                : ''
                
            
            }
            <div className='comp-list-container'>
                {compList}
            </div>
        </div>
    );
};

export default StudentDisplay;