import React, { Component } from 'react';
import { context } from '../shared/Context';
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
                <CompetenciesDisplay students={students} />
            </div>
        );
    }
}

export default context(DashboardContainer)