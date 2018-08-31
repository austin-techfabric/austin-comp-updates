import React, { Component } from 'react';
import LoginDisplay from './LoginDisplay';
import { context } from '../shared/Context';

class LoginContainer extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }


    render() {
        console.log(this.props, context);
        return (
            <div className='login-container'>
                <LoginDisplay />
            </div>
        );
    }
}

export default context(LoginContainer)