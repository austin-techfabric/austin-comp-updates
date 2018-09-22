import React, { Component } from 'react';
import StaffView from './StaffView';
import {Redirect} from 'react-router-dom';
import { staffContext } from '../shared/staffContext';

class StaffContainer extends Component {


    componentDidMount(){
        
    }
    
    render() {
        return (
            <div>
            </div>
        );
    }
}

export default staffContext(StaffContainer)