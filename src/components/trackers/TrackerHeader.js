import React from 'react';
import {Plus} from '../shared/Icons';

const TrackerHeader = (props) => {
    return (
            <header>
                <div>
                    <h1>Trackers</h1>
                    <select>
                        <option value='assessments'>Assessments</option>
                        <option value='competencies'>Competencies</option>
                    </select>
                </div>
               <button>
                   {/* <svg x='0px' y='0px' width='50px' height='50px' viewBox='0 0 105 105'>
                        <circle fillOpacity='0' strokeWidth='4px' stroke='white' cx='40px' cy='40px' r='20px'/>
                        <line x1="50px" y1="40px" x2="30px" y2="40px" fill="none" stroke="white" stroke-width="4px"/>
                        <line x1="40px" y1="30px" x2="40px" y2="50px" fill="none" stroke="white" stroke-width="4px"/>
                   </svg> */}
                   <Plus />
                   Add
               </button>
           </header>
    );
};

export default TrackerHeader;