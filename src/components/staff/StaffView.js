import React from 'react';

const StaffView = (props) => {
    console.group();
    console.log(props);
    console.groupEnd();
    return (
        <div className='staff-display'>
           <header>
               <h1>Staff</h1>
           </header>
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
                    <button onClick={()=> props.context.userMethods.addStaff(props.context.staff_email, props.name,props.context.staff_position)}>Add Staff</button>
                </div>

                
           </div>
        </div>
    );
};

export default StaffView;