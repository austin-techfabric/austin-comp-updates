import React, { Component } from 'react';
import CompetenciesStudentDisplay from './CompetenciesStudentDisplay';
import {Redirect} from 'react-router-dom';
import {staffContext} from '../shared/staffContext'; 

class CompetenciesStudentContainer extends Component {

    constructor(){
        super()
        this.state = {
            
        }
    }

    componentDidMount(){
        this.props.staffContext.studentMethods.getStudentHtmlCssById(this.props.match.params.id)
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
                {this.props.staffContext.user ? <CompetenciesStudentDisplay {...this.state} toggleButton={this.toggleButton} onChange={this.onChange} {...this.props} /> : <Redirect to='/' />}
            </div>
        );
    }
}

export default staffContext(CompetenciesStudentContainer)