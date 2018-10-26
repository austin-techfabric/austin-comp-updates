import React, { Component } from 'react';
import StudentProfileDisplay from './StudentProfileDisplay';
import axios from 'axios';
import { staffContext } from '../shared/staffContext';

class StudentProfileContainer extends Component {
    constructor(){
        super()
        this.state = {
            studentAssessments: [],
            studentCompetencies: [],
            studentHtmlCss:[]
        }
    }

    componentDidMount(){
        axios.get('/api/get_student_info').then(({data: studentInfo})=>{
            this.setState(() => {
                this.props.staffContext.studentMethods.setStudentLogin(studentInfo)
                return {
                    studentAssessments: studentInfo.assessments,
                    studentCompetencies: studentInfo.competencies,
                    studentHtmlCss: studentInfo.htmlcss
                }
            })
        })
    }
    
    render() {
        return (
            <div>
                <StudentProfileDisplay competencies={this.state.studentCompetencies} htmlcss={this.state.studentHtmlCss}  assessments={this.state.studentAssessments}/>
            </div>
        );
    }
}

export default staffContext(StudentProfileContainer)