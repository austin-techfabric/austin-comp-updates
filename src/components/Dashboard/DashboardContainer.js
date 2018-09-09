import React, { Component } from 'react';
import DashboardDisplay from './DashboardDisplay';
import {context} from '../shared/Context';

class DashboardContainer extends Component {
    render() {
        return (
            <div className='dashboard-container'>
                <DashboardDisplay {...this.props}/>
            </div>
        );
    }
}

export default context(DashboardContainer);