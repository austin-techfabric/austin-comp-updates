import React from 'react';

const EditAssignments = (props) => {
    console.log(props.assignments);

    const assignmentList = props.assignmentType === 'assessments' ? props.assignments.map(assessment => {
        console.log(assessment.assessment_name)
        return <div className='assignment-container' key={assessment.id}>
                    <div>{assessment.assessment_name}</div>
                    <div>{assessment.active ? <p onClick={() => props.updateEditableAssignments(assessment.id, false)} className='assignment active'>active</p>: <p onClick={() => props.updateEditableAssignments(assessment.id, true)} className='assignment inactive'>inactive</p>}</div> 
                </div>
    })
    :
    props.assignmentType === 'competencies' ? props.assignments.map(competency => {
        return <div className='assignment-container' key={competency.id}>
                    <div>{competency.category}</div>
                    <div>{competency.competency_name || competency.name}</div>
                    <div>{competency.description}</div>
                    <div>{competency.active ? <p onClick={() => props.updateEditableAssignments(competency.id, false)} className='assignment active'>active</p>: <p onClick={() => props.updateEditableAssignments(competency.id, true)} className='assignment inactive'>inactive</p>}</div> 
                </div>
    }) : null;

    return (
        <div className='editable-assignment-container'>
            {props.assignmentType === 'assessments' ?
            <div>
                <h2>Assessment Name</h2>
                <h2>Active</h2>
            </div>
            :
            props.assignmentType === 'competencies' ?
            <div>
                <h2>Category</h2>
                <h2>Competency Name</h2>
                <h2>Description</h2>
                <h2>Active</h2>
            </div>
            :''}   
            {assignmentList}
        </div>
    );
}

export default EditAssignments