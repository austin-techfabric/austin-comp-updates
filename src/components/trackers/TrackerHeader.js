import React from 'react';
import {Plus} from '../shared/Icons';

const TrackerHeader = (props) => {
    const { getListOfTogglableAssignments } = props.staffContext.staffMethods
    return (
            <header>
                <div>
                    <h1>Trackers</h1>
                    <select name='assignmentTypeStatus' onChange={(e) => {
                        props.changeHandler(e.target.name, e.target.value)
                        getListOfTogglableAssignments(e.target.value)
                        }} value={props.assignmentTypeStatus}>
                        <option defaultValue value='competencies'>Competencies</option>
                        <option value='assessments'>Assessments</option>
                    </select>
                </div>
               <button>
                   <Plus />
                    Add
               </button>
           </header>
    );
};

export default TrackerHeader;