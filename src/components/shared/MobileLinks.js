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
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/resume'>Resume</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}