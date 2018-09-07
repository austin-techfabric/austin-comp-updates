import React, { Component } from 'react';
import StudentDisplay from './StudentDisplay';
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
        console.log('test id', this.props.match.params.id)
        const { student } = this.props.context
        console.log('student========', student)
        return (
            <div className='student-container'>
                <StudentDisplay student={student} />
            </div>
        );
    }
}

export default context(StudentContainer)