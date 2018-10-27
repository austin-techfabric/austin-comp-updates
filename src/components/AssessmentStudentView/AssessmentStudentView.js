import React from 'react';
import incomplete from '../../styles/media/incomplete-1.svg'
import passed from '../../styles/media/pass.svg';
import arrow from '../../styles/media/arrow.svg'

const AssessmentStudentView = (props) => {
    const {user, studentAssignment, studentMethods, assignmentType} = props.staffContext
    let comPassed = 0;
    studentAssignment.forEach(comp => {
        if(comp.passed){
            comPassed += 1;
        }
    })
    let percentageComplete = (comPassed/studentAssignment.length) * 100;
    const assessList = studentAssignment.map(assess => {
        return <div key={assess.assess_id} style={assess.passed ? {backgroundColor:"#c6f2c4"} : {textDecoration: 'none'}} className='assess-container'>
                    <div>
                        <div style={assess.passed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{assess.assessment_name}</div>
                        <div className='status-image-container'>{user ? assess.passed ? <img onClick={() => studentMethods.markAssessComplete(assess.assess_id, assess.id, !assess.passed)} src={passed} alt='a passing checkmark'/> : <img onClick={() => studentMethods.markAssessComplete(assess.assess_id, assess.id, !assess.passed)} alt='an unchecked checkmark' src={incomplete}/> : ''}</div>
                    </div>
                    <div className={props[`toggle-${assess.assess_id}`] ? 'notes-arrow open' : 'notes-arrow'} >
                        <div>
                            <span >Additional Notes:</span>
                            <span className='added-note'>{assess.notes}</span>
                            <textarea name={`additionalNotes-${assess.assess_id}`} onChange={(e) => props.onChange(e.target.name, e.target.value)} value={props[`additionalNotes-${assess.assess_id}`]}/>
                            <button onClick={() => studentMethods.addNoteToAssignment(props[`additionalNotes-${assess.assess_id}`] || assess.notes, assess.assess_id, studentAssignment[0].id, assignmentType)} style={{textDecoration: 'none'}}>Submit</button>
                        </div>
                        <div className='arrow-image-container' onClick={() => props.toggleButton(`toggle-${assess.assess_id}`)}>
                            <img src={arrow} />
                        </div>
                    </div>
                </div>
    })
    return (
        <div className='student-assessment-display'>
            
            {studentAssignment[0] ?
            <div className='st-dis-header-container'>
                <div>
                    <h1>{studentAssignment[0].name} | {studentAssignment[0].cohort}</h1>
                    <h2>{studentAssignment[0].email}</h2>
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