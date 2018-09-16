import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MobileLinks extends Component {
    render() {
        return (
            <div className='nav-links-mobile-container'>
                <div className='hamburger-icon'>
                    {this.props.children}
                </div>
                <div className={this.props.toggle ? 'links hide' : 'links'}>
                    <ul>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/staff'>Staff</Link></li>
                        <li><Link to='/class_list'>Student</Link></li>
                        <li><Link to='/assessments'>Assessments</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}