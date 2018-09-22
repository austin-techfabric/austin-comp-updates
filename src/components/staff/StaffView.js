import React from 'react';

const StaffView = (props) => {

    const staffList = props.staffContext.staffList.map((staff) => {
        return <div key={staff.id} className='staff-class-list-card-container'>
                    <div>{staff.position}</div>
                    <div>{staff.name}</div>
                    <div>{staff.email}</div>
                </div>
    })

    const invitedStaffList = props.staffContext.invitedStaffList.map((staff) => {
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
                        Position: <select name='staffPosition' onChange={(e) => props.changeHandler(e.target.name, e.target.value)} value={props.staffPosition}>
                                        <option defaultValue value='Mentor'>Mentor</option>
                                        <option value='Lead-Lecturer'>Lead-Lecturer</option>
                                        <option value='Lecturer'>Lecturer</option>
                                        <option value='Lead-Mentor'>Lead-Mentor</option>
                                        <option value='Admin'>Admin</option>
                                </select>
                        Email: <input name='staffEmail' onChange={(e)=> props.changeHandler(e.target.name, e.target.value)} value={props.staffEmail}/>
                        <button onClick={()=> {
                            props.staffContext.staffMethods.inviteStaff(props.staffPosition, props.staffEmail)
                            props.clearInputs()
                        }}>Add Staff</button>
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