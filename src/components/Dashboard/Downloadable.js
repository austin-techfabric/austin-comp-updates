import React, { Component } from 'react';
import {CSVLink} from 'react-csv';
import {staffContext} from '../shared/staffContext';

class Downloadable extends Component {
    
    render() {
        const {assignmentType, downloadableList, cohort} = this.props.staffContext
        let data = downloadableList;
        return (
            <CSVLink data={data}
                filename={`${cohort}-${assignmentType}.csv`}
                className='downloadable'
                target="_blank">
                Download
            </CSVLink>
        );
    }
}

export default staffContext(Downloadable)