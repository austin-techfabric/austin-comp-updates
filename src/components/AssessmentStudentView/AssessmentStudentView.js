import React from 'react';
import incomplete from '../../styles/media/incomplete-1.svg'
import passed from '../../styles/media/pass.svg';

const AssessmentStudentView = (props) => {
    const {user, studentAssessment, studentMethods} = props.staffContext
    let comPassed = 0;
    studentAssessment.forEach(comp => {
        if(comp.passed){
            comPassed += 1;
        }
    })
    let percentageComplete = (comPassed/studentAssessment.length) * 100;
    
    const assessList = studentAssessment.map(assess => {
        return <div key={assess.assess_id} style={assess.passed ? {textDecoration: 'line-through', backgroundColor:"#e0d0d0"} : {textDecoration: 'none'}} className='assess-container'>
                    <div>{assess.assessment_name}</div>
                    <div className='status-image-container'>{user ? assess.passed ? <img onClick={() => studentMethods.markAssessComplete(assess.assess_id, assess.id, !assess.passed)} src={passed} alt='a passing checkmark'/> : <img onClick={() => studentMethods.markAssessComplete(assess.assess_id, assess.id, !assess.passed)} alt='an unchecked checkmark' src={incomplete}/> : ''}</div>
                </div>
    })
    return (
        <div className='student-assessment-display'>
            
            {studentAssessment[0] ?
            <div className='st-dis-header-container'>
                <div>
                    <h1>{studentAssessment[0].name} | {studentAssessment[0].cohort}</h1>
                    <h2>{studentAssessment[0].email}</h2>
                </div>
                <div className='header-and-back-button-container'>
                    <h1>{parseInt(percentageComplete, 10)} % Complete </h1>
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