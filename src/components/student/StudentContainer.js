import React, { Component } from 'react';
import StudentDisplay from './StudentDisplay';
import {Redirect} from 'react-router-dom';
import {staffContext} from '../shared/staffContext'; 

class StudentContainer extends Component {

    constructor(){
        super()
        this.state = {
            
        }
    }

    componentDidMount(){
        this.props.staffContext.studentMethods.getStudentCompetenciesById(this.props.match.params.id)
    }

    render() {
        return (
            <div className='student-container'>
                {this.props.staffContext.user ? <StudentDisplay {...this.props} /> : <Redirect to='/' />}
            </div>
        );
    }
}

export default staffContext(StudentContainer)