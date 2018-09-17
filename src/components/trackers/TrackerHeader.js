import React from 'react';
import {Plus} from '../shared/Icons';

const TrackerHeader = (props) => {
    return (
            <header>
                <div>
                    <h1>Trackers</h1>
                    <select name='assignmentType' onChange={(e) => props.changeHandler(e.target.name, e.target.value)} value={props.assignmentType}>
                        <option value='assessments'>Assessments</option>
                        <option value='competencies'>Competencies</option>
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