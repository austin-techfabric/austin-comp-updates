import React from 'react';
import { c } from '../../Helpers';

const StaffView = (props) => {

   
 
    return (
        <div className='staff-display'>
           <header>
               <h1>Staff</h1>
           </header>
           <div className='add-staff-container'>
                <div>
                    <div>
                        Position: <select name='staff_position' onChange={{}} value={''}>
                                        <option value='Lead-Lecturer'>Lead-Lecturer</option>
                                        <option value='Lecturer'>Lecturer</option>
                                        <option value='Lead-Mentor'>Lead-Mentor</option>
                                        <option defaultValue value='Mentor'>Mentor</option>
                                        <option value='Admin'>Admin</option>
                                </select>
                        Email: <input name='staff_email' onChange={(e)=> {}} value={props.context.staff_email}/>
                        <button onClick={()=> {}}>Add Staff</button>
                    </div>

                    <div>
                        <h2>Invited Staff</h2>
                    </div>

                    <div>
                        <h2>Current Staff</h2>
                    </div>
                </div>  
           </div>
        </div>
    );
};

export default StaffView;