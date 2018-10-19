import React, { PureComponent } from 'react';
import {HamburgerIcon} from './Icons';
import MobileLinks from './MobileLinks';
import { staffContext } from './staffContext';
import { Link } from 'react-router-dom';
import Logo from '../../styles/media/devmountain_logo.png';

class Header extends PureComponent {
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
        return (
            <div className='header-container'>
                <div>
                    <div className='header-logo'>
                        <img src={Logo} alt='dev mountain logo'/>
                    </div>
                    <div className='nav-links-desktop'>
                       
                           {this.props.staffContext.user && this.props.staffContext.user.position !== 'Mentor'
                            ?
                            <ul>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                <li className='sub-menu'>
                                    <span>Staff</span>
                                    <ul className='sub-header-menu-skinny'>
                                        <div>
                                            <li><Link to='/trackers'>Trackers</Link></li>
                                            <li><Link to='/staff'>Add Staff</Link></li>
                                        </div>
                                    </ul>
                                </li>
                                <li><Link to='/class_list'>Students</Link></li>
                                <li className='sub-menu'>
                                    <span>Assignments</span>
                                    <ul className='sub-header-menu'>
                                        <div>
                                            <li><Link to='/competencies'>Competencies</Link></li>
                                            <li><Link to='/assessments'>Assessments</Link></li>
                                            <li><Link to='/html_css'>HTML/CSS</Link></li>
                                        </div>
                                    </ul>
                                </li>
                                <li><span onClick={this.props.staffContext.staffMethods.logout}>logout</span></li>
                            </ul> 
                            : this.props.staffContext.user ?
                            <ul>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <li><Link to='/class_list'>Students</Link></li>
                            <li className='sub-menu'>
                                <span>Assignments</span>
                                <ul className='sub-header-menu'>
                                    <div>
                                        <li><Link to='/competencies'>Competencies</Link></li>
                                        <li><Link to='/assessments'>Assessments</Link></li>
                                        <li><Link to='/html_css'>HTML/CSS</Link></li>
                                    </div>
                                </ul>
                            </li>
                            <li><span onClick={this.props.staffContext.staffMethods.logout}>logout</span></li>
                        </ul>
                        :
                           <ul>
                               <li></li>
                               <li><Link to='/'>Login</Link></li>
                            </ul>
                           }
                        
                    </div>
                    <MobileLinks toggle={this.state.toggle}>
                        <HamburgerIcon toggleMobileLinks={this.toggleMobileLinks}/>
                    </MobileLinks>
                    
                </div>
            </div>
        );
    }
}

export default staffContext(Header)