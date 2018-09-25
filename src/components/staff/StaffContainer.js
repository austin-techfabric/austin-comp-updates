import React, { Component } from 'react';
import StaffView from './StaffView';
import {Redirect} from 'react-router-dom';
import { staffContext } from '../shared/staffContext';

class StaffContainer extends Component {
    
    state = {
        staffPosition:'Mentor',
        staffEmail:''
    }

    componentDidMount(){
        this.props.staffContext.staffMethods.getInvitedStaff()
        this.props.staffContext.staffMethods.getAllStaff()
    }

    changeHandler = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    clearInputs = () => {
        this.setState({
            staffPosition:'',
            staffEmail:''
        })
    }
    
    render() {
        return (
            <div>
                { this.props.staffContext.user ? <StaffView clearInputs={this.clearInputs} changeHandler={this.changeHandler} {...this.state} {...this.props}/>  : <Redirect to='/' />}
            </div>
        );
    }
}

export default staffContext(StaffContainer)