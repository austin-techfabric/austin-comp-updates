import React, { Component } from 'react';
import TrackerHeader from './TrackerHeader';
import EditAssignments from './EditAssignments';
import { staffContext } from '../shared/staffContext';

class TrackerContainer extends Component {

    state = {
        assignmentTypeStatus: ''
    }

    componentDidMount(){
        const { getListOfTogglableAssignments } = this.props.staffContext.staffMethods
        getListOfTogglableAssignments('competencies')
    }

    changeHandler = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render() {
        
        return (
            <div className='tracker-container'>
                <TrackerHeader changeHandler={this.changeHandler} {...this.state} {...this.props}/>
                <EditAssignments assignmentTypeStatus={this.state.assignmentTypeStatus} {...this.props} />
            </div>
        );
    }
}

export default staffContext(TrackerContainer)