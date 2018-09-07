import React, { PureComponent } from 'react';
import {HamburgerIcon} from './Icons';
import MobileLinks from './MobileLinks';
import { context } from '../shared/Context';
import { Link } from 'react-router-dom';
import Logo from '../../styles/media/devmountain_logo.png';

class Header extends PureComponent {
    constructor(){
        super()
        this.state={
            toggle: true
        }
    }

    componentDidMount(){
        
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
                       
                           {this.props.context.user
                            ?
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><span onClick={this.props.context.userMethods.logout}>logout</span></li>
                            </ul> 
                            : 
                           <ul>
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

export default context(Header)