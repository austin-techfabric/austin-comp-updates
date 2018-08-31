import React, { Component } from 'react';
import {HamburgerIcon} from './Icons';
import MobileLinks from './MobileLinks';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(){
        super()
        this.state={
            toggle: true
        }
    }

    toggleMobileLinks = () => {
        this.setState((prevProps)=> {
            return {
                toggle: !prevProps.toggle
            }
        })
    }


    render() {
        console.log(this.state.toggle);
        return (
            <div className='header-container'>
                <div>
                    <div className='header-logo'>
                        <h1>JOSH BORUP</h1>
                    </div>
                    <div className='nav-links-desktop'>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                    </div>
                    <MobileLinks toggle={this.state.toggle}>
                        <HamburgerIcon toggleMobileLinks={this.toggleMobileLinks}/>
                    </MobileLinks>
                    
                </div>
            </div>
        );
    }
}