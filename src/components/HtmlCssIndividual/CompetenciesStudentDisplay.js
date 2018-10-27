import React from 'react';
import incomplete from '../../styles/media/incomplete-1.svg'
import passed from '../../styles/media/pass.svg';
import arrow from '../../styles/media/arrow.svg';

const StudentDisplay = (props) => {
    const {user, studentAssignment, studentMethods, assignmentType} = props.staffContext

    let comPassed = 0;
    studentAssignment.forEach(comp => {
        if(comp.passed){
            comPassed += 1;
        }
    })
    let percentageComplete = (comPassed / studentAssignment.length) * 100;
    
    const compList = studentAssignment.map(comp => {
        
        return <div key={comp.comp_id} style={comp.passed ? {backgroundColor:"#c6f2c4"} : {textDecoration: 'none'}} className='comp-container'>
                    <div style={comp.passed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>
                        <div>{comp.category}</div>
                        <div>{comp.competency_name}</div>
                        <div>{comp.description}</div>
                        <div className='status-image-container'>{user ? comp.passed ? <img onClick={() => studentMethods.markHtmlCssComplete(comp.comp_id, comp.id, !comp.passed)} alt='a passing checkmark' src={passed}/> : <img onClick={() => studentMethods.markHtmlCssComplete(comp.comp_id, comp.id, !comp.passed)} src={incomplete} alt='an unchecked checkmark'/> : ''}</div>
                    </div>
                    <div className={props[`toggle-${comp.comp_id}`] ? 'notes-arrow open' : 'notes-arrow'} >
                        <div>
                            <span >Additional Notes:</span>
                            <span className='added-note'>{comp.notes}</span>
                            <textarea name={`additionalNotes-${comp.comp_id}`} onChange={(e) => props.onChange(e.target.name, e.target.value)} value={props[`additionalNotes-${comp.comp_id}`]}/>
                            <button onClick={() => studentMethods.addNoteToAssignment(props[`additionalNotes-${comp.comp_id}`] || comp.notes, comp.comp_id, studentAssignment[0].id, assignmentType)} style={{textDecoration: 'none'}}>Submit</button>
                        </div>
                        <div className='arrow-image-container' onClick={() => props.toggleButton(`toggle-${comp.comp_id}`)}>
                            <img src={arrow} />
                        </div>
                    </div>
                </div>
    })

    return (
    
        <div className='student-display'>
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
            <div className='comp-list-container'>
                {compList}
            </div>
        </div>
    );
};

export default StudentDisplay;