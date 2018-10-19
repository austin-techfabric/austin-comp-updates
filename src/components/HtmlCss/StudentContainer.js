import React, { Component } from 'react';
import StudentDisplay from './CompetenciesStudentDisplay';
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

    toggleButton = (key) => {
        this.setState((prevProps)=> {
            return {
                [key]: !prevProps[key]
            }
        })
    }

    onChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <div className='student-container'>
                {this.props.staffContext.user ? <StudentDisplay {...this.state} toggleButton={this.toggleButton} onChange={this.onChange} {...this.props} /> : <Redirect to='/' />}
            </div>
        );
    }
}

export default staffContext(StudentContainer)