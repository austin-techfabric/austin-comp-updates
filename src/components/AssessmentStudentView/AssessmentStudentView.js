import React from 'react';
import incomplete from '../../styles/media/incomplete-1.svg'
import passed from '../../styles/media/pass.svg';

const AssessmentStudentView = (props) => {
    let comPassed = 0;
    props.student.forEach(comp => {
        if(comp.passed){
            comPassed += 1;
        }
    })
    let percentageComplete = (comPassed/21) * 100;
    
    const assessList = props.student.map(assess => {
        return <div key={assess.assess_id} style={assess.passed ? {textDecoration: 'line-through', backgroundColor:"#e0d0d0"} : {textDecoration: 'none'}} className='assess-container'>
                    <div>{assess.assessment_name}</div>
                    <div className='status-image-container'>{props.user ? assess.passed ? <img onClick={() => props.context.studentMethods.markAssessComplete(assess.assess_id, assess.id, !assess.passed)} src={passed}/> : <img onClick={() => props.context.studentMethods.markAssessComplete(assess.assess_id, assess.id, !assess.passed)} src={incomplete}/> : ''}</div>
                </div>
    })

    return (
        <div className='student-assessment-display'>
            {props.student[0] ?
            <div className='st-dis-header-container'>
                <div>
                    <h1>{props.student[0].name} | {props.student[0].cohort}</h1>
                    <h2>{props.student[0].email}</h2>
                </div>
                <div className='header-and-back-button-container'>
                    <h1>{parseInt(percentageComplete)} % Complete </h1>
                    <button onClick={props.history.goBack}>Back</button>
                </div>
            </div>
                : ''
            }
            <div className='assess-list-container'>
              {assessList}
            </div>
        </div>
    );
};

export default AssessmentStudentView;