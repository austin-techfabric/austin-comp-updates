import React, { Component } from 'react';
import DashboardDisplay from './DashboardDisplay';
import {Redirect} from 'react-router-dom';
import {context} from '../shared/Context';

class DashboardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
        }

        this.props.context.studentMethods.getAssignmentsByCohort();
    }

    componentDidMount() {

        //refactor this so you dont have to use set timeout to make block async
        setTimeout(() => {
            this.props.context.studentMethods.getStudentsByCohort(true);
            this.props.context.studentMethods.getAssignmentsByCohort();
        }, 0)
        
        this.liveClock = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.liveClock);
    }


    tick = () => {
        this.setState({
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
        });
    }

    render() {
        console.log(this.props.context.students)
        return (
            <div className='dashboard-container'>
                {this.props.context.user ? <DashboardDisplay {...this.state} {...this.props}/> : <Redirect to='/' />}
            </div>
        );
    }
}

export default context(DashboardContainer);