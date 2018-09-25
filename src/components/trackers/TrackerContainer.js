import React, { Component } from 'react';
import TrackerHeader from './TrackerHeader';
import EditAssignments from './EditAssignments';
import { staffContext } from '../shared/staffContext';
import {Redirect} from 'react-router-dom';

class TrackerContainer extends Component {

    state = {
        assignmentTypeStatus: 'competencies'
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
                {this.props.staffContext.user && this.props.staffContext.user.position !== 'Mentor' ?
                    <div>
                        <TrackerHeader changeHandler={this.changeHandler} {...this.state} {...this.props}/>
                        <EditAssignments assignmentTypeStatus={this.state.assignmentTypeStatus} {...this.props} />
                    </div>
                    :
                    <Redirect to='/' />
                }
            </div>
        );
    }
}

export default staffContext(TrackerContainer)