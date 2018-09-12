import React from 'react';
import AssessmentGraph from './AssessmentGraph';
const Overview = (props) => {
    
    return (
        <div className='overview-container'>
           <div>
               <div>
                    <span>Cohort</span> | <select name='cohort' onChange={(e)=> props.context.changeCohortHandler(e.target.name, e.target.value)} value={props.cohort}>
                        {props.context.cohort ? <option defaultValue value={props.context.cohort}>{`${props.context.cohort}`}</option> : <option defaultValue value={props.context.user.assignedCohort}>{`${props.context.user.assignedCohort}`}</option>}
                        <option value='wpx1'>wpx1</option>
                        <option value='wpx2'>wpx2</option>
                        <option value='wpx3'>wpx3</option>
                        <option value='wpx4'>wpx4</option>
                        <option value='wpx5'>wpx5</option>
                        <option value='wpx6'>wpx6</option>
                        <option value='wpx7'>wpx7</option>
                        <option value='wpx8'>wpx8</option>
                        <option value='wpx9'>wpx9</option>
                        <option value='wpx10'>wpx10</option>
                    </select>
                </div>

                <div className='type-container'>
           <span>Type</span> | <select name='assignmentType' onChange={(e)=> props.context.changeAssignmentHandler(e.target.name, e.target.value)} value={props.context.assignmentType}>
                    <option defaultValue value='competencies'>Competencies</option>
                    <option value='assessments'>Assessments</option>
                </select>
                </div>
           </div>
           <AssessmentGraph {...props}/>
        </div>
    );
};

export default Overview;



