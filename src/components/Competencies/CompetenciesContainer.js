import React, { Component } from 'react';
import { staffContext } from '../shared/staffContext';
import {Redirect} from 'react-router-dom';
import CompetenciesDisplay from './CompetenciesDisplay';

class CompetenciesContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
    componentDidMount(){
        setTimeout(()=> {
            this.props.staffContext.studentMethods.getAssignmentsByCohort(this.props.staffContext.cohort || this.props.staffContext.user.assignedCohort, 'competencies')
            this.props.staffContext.studentMethods.getCohortStats('competencies', this.props.staffContext.cohort || this.props.staffContext.user.assignedCohort)
        }, 0)
    }

    render() {
        console.log()
        return (
            <div className='dashboard-container'>
                {this.props.staffContext.user ? <CompetenciesDisplay {...this.props} /> : <Redirect to='/' />}
            </div>
        );
    }
}

export default staffContext(CompetenciesContainer)