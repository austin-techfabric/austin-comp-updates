import React, { Component } from 'react';
import StaffView from './StaffView';
import {Redirect} from 'react-router-dom';
import {context} from '../shared/Context';

class StaffContainer extends Component {


    componentDidMount(){
        this.props.context.userMethods.getAllStaff();
        this.props.context.userMethods.getInvitedStaff();
    }
    
    render() {
        return (
            <div>
            { this.props.context.user ? <StaffView {...this.props}/>  : <Redirect to='/' />}
            </div>
        );
    }
}

export default context(StaffContainer)