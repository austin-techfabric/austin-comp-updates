import React, { Component } from 'react';
import ClassListDisplay from './ClassListDisplay';
import {Redirect} from 'react-router-dom';
import { staffContext } from '../shared/staffContext';

class ClassListContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email: ''
        }
    }
    
    changeHandler = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    clearInputs = () => {
        this.setState({
            name: '',
            email: ''
        })
    }
    
    render() {

        return (
            <div className='class-list-container'>
            {this.props.staffContext.user ? <ClassListDisplay {...this.state} clearInputs={this.clearInputs} changeHandler={this.changeHandler} {...this.props} /> : <Redirect to='/'/>}
                {/* <ClassListDisplay {...this.props} /> */}
            </div>
        );
    }
}

export default staffContext(ClassListContainer);