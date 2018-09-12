import React, { Component } from 'react';
import ClassListDisplay from './ClassListDisplay';
import {Redirect} from 'react-router-dom';
import {context} from '../shared/Context';

class ClassListContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    componentDidMount(){
        const {studentMethods, cohort} = this.props.context
        studentMethods.getStudentsByCohort(cohort, true)
    }
    
    render() {

        const {students, changeHandler, changeCohortHandler, name, email, cohort, user} = this.props.context
        return (
            <div className='class-list-container'>
                {this.props.context.user ?  <ClassListDisplay cohort={cohort || user.assignedCohort} addStudent={this.props.context.studentMethods.addStudent} name={name} email={email} changeHandler={changeHandler} changeCohortHandler={changeCohortHandler} students={students} user={user}/> : <Redirect to='/' />}
            </div>
        );
    }
}

export default context(ClassListContainer);