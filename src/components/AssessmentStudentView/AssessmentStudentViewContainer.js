import React, { Component } from 'react';
import AssessmentStudentView from './AssessmentStudentView';
import {Redirect} from 'react-router-dom';
import { staffContext } from '../shared/staffContext';

class AssessmentStudentViewContainer extends Component {

    state = {
        toggle: false,
    }

    componentDidMount(){
        this.props.staffContext.studentMethods.getStudentAssessmentById(this.props.match.params.id)
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
            <div className='assessment-student-view-container'>
                {this.props.staffContext.user ? <AssessmentStudentView onChange={this.onChange} toggleButton={this.toggleButton} {...this.state} {...this.props}/> : <Redirect to='/' />}
            </div>
        );
    }
}

export default staffContext(AssessmentStudentViewContainer);