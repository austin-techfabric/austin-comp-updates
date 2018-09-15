import React from 'react';
import { c } from '../../Helpers';

const StaffView = (props) => {

    c(props.context.staffList,'staff_ list','props');

    const staffList = props.context.staffList.map((staff) => {
        return <div key={staff.id} className='staff-class-list-card-container'>
                    <div>{staff.position}</div>
                    <div>{staff.name}</div>
                    <div>{staff.email}</div>
                </div>
    })

    const invitedStaffList = props.context.invitedStaffList.map((staff) => {
        return <div key={staff.id} className='staff-class-list-card-container'>
                    <div>{staff.position}</div>
                    <div>{staff.email}</div>
                </div>
    })
 
    return (
        <div className='staff-display'>
           <header>
               <h1>Staff</h1>
           </header>
           <div className='add-staff-container'>
                <div>
                    <div>
                        Position: <select name='staff_position' onChange={(e)=> props.context.changeHandler(e.target.name, e.target.value)} value={props.context.staff_position}>
                                        <option value='Lead-Lecturer'>Lead-Lecturer</option>
                                        <option value='Lecturer'>Lecturer</option>
                                        <option value='Lead-Mentor'>Lead-Mentor</option>
                                        <option defaultValue value='Mentor'>Mentor</option>
                                        <option value='Admin'>Admin</option>
                                </select>
                        Email: <input name='staff_email' onChange={(e)=> props.context.changeHandler(e.target.name, e.target.value)} value={props.context.staff_email}/>
                        <button onClick={()=> props.context.userMethods.inviteStaff(props.context.staff_email, props.name,props.context.staff_position)}>Add Staff</button>
                    </div>

                    <div>
                        <h2>Invited Staff</h2>
                        {invitedStaffList}
                    </div>

                    <div>
                        <h2>Current Staff</h2>
                        {staffList}
                    </div>
                </div>  
           </div>
        </div>
    );
};

export default StaffView;