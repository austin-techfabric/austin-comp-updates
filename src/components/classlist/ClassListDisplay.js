import React from 'react';

const ClassListDisplay = (props) => {

    const classList = props.staffContext.studentListByCohort.map((student) => {
        return <div key={student.id} className='student-class-list-card-container'>
                    <div>{student.name}</div>
                    <div>{student.email}</div>
                </div>
    })
    
    return (
        <div>
            <header><h1>Students</h1><h1> | </h1><select name='cohort' onChange={(e)=> props.staffContext.changeCohort(props.staffContext.assignmentType, e.target.value)} value={props.staffContext.cohort}>
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
                </select> </header>

            <div>
                Name: <input name='name' onChange={(e)=> props.changeHandler(e.target.name, e.target.value)} value={props.name}/>
                Email: <input name='email' onChange={(e)=> props.changeHandler(e.target.name, e.target.value)} value={props.email}/>
                <button onClick={()=> {
                    props.staffContext.studentMethods.addStudentToCohort(props.name, props.email, props.staffContext.cohort)
                    props.clearInputs()
                }}>Add Student</button>
            </div>
                { classList }
            <div>
            </div>
        </div>
    );
};

export default ClassListDisplay;