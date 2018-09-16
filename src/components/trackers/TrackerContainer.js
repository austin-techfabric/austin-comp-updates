import React, { Component } from 'react';
import TrackerHeader from './TrackerHeader';

export default class TrackerContainer extends Component {
    render() {
        return (
            <div className='tracker-container'>
                <TrackerHeader />
            </div>
        );
    }
}