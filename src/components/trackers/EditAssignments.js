import React from 'react';

const EditAssignments = (props) => {
    const { staffContext } = props

    let chosenAssignment = props.assignmentTypeStatus || 'competencies'

    const assignmentList = chosenAssignment === 'assessments' ? props.staffContext.togglableAssignmentList.map(assessment => {
        return <div className='assignment-container' key={assessment.id}>
                    <div>{assessment.assessment_name}</div>
                    <div>{assessment.active ? <p onClick={() => props.staffContext.staffMethods.updateTogglableAssignment(assessment.id, false, chosenAssignment)} className='assignment active'>active</p>: <p onClick={() => props.staffContext.staffMethods.updateTogglableAssignment(assessment.id, true, chosenAssignment)} className='assignment inactive'>inactive</p>}</div> 
                </div>
    })
    :
    chosenAssignment === 'competencies' ? props.staffContext.togglableAssignmentList.map(competency => {
        return <div className='assignment-container' key={competency.id}>
                    <div>{competency.category}</div>
                    <div>{competency.competency_name || competency.name}</div>
                    <div>{competency.description}</div>
                    <div>{competency.active ? <p onClick={() => props.staffContext.staffMethods.updateTogglableAssignment(competency.id, false, chosenAssignment)} className='assignment active'>active</p>: <p onClick={() => props.staffContext.staffMethods.updateTogglableAssignment(competency.id, true, chosenAssignment)} className='assignment inactive'>inactive</p>}</div> 
                </div>
    }) : null;

    return (
        <div className='editable-assignment-container'>
            {assignmentList}
        </div>
    );
}

export default EditAssignments