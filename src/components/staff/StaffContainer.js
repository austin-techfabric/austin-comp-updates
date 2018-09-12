import React, { Component } from 'react';
import StaffView from './StaffView';
import {context} from '../shared/Context';

class StaffContainer extends Component {
    render() {
        return (
            <StaffView {...this.props}/>
        );
    }
}

export default context(StaffContainer)