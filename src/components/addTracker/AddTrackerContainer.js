import React, { Component } from 'react';
import AddTrackerDisplay from './AddTrackerDisplay';
import { staffContext } from '../shared/staffContext';
import {Redirect} from 'react-router-dom';

class AddTrackerContainer extends Component {
    render() {
        return (
            <div>
                {this.props.staffContext.user && this.props.staffContext.user.position !== 'Mentor' ? <AddTrackerDisplay {...this.props} /> : <Redirect to='/' />}
            </div>
        );
    }
}

export default staffContext(AddTrackerContainer);