import React, { Component } from 'react';
import { context } from '../shared/Context';
import {Redirect} from 'react-router-dom';
import CompetenciesDisplay from './CompetenciesDisplay';

class DashboardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
    componentDidMount(){

        this.props.context.studentMethods.getStudentsByCohort(this.props.context.cohort, true)
    }

    render() {

        const { students, cohort } = this.props.context;
        console.log(cohort)
        return (
            <div className='dashboard-container'>
                {this.props.context.user ? <CompetenciesDisplay students={students} /> : <Redirect to='/' />}
            </div>
        );
    }
}

export default context(DashboardContainer)