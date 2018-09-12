import React, { Component } from 'react';
import StudentDisplay from './StudentDisplay';
import {Redirect} from 'react-router-dom';
import {context} from '../../components/shared/Context'; 

class StudentContainer extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }

    componentDidMount(){
        this.props.context.studentMethods.getStudentById(this.props.match.params.id)
    }

    render() {
        const { student, user } = this.props.context
        return (
            <div className='student-container'>
                {this.props.context.user ? <StudentDisplay user={user} student={student} {...this.props} /> : <Redirect to='/' />}
            </div>
        );
    }
}

export default context(StudentContainer)