import React, { Component } from 'react';
import LoginDisplay from './LoginDisplay';
import { context } from '../shared/Context';

class HomeContainer extends Component {
    state = {
            email: '',
            password: ''
    }
    
    changeHandler = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <div  className='home-container'>
                
                <LoginDisplay login={this.props.context.userMethods.login} changeHandler={this.changeHandler} {...this.state} />
                
            </div>
        );
    }
}

export default context(HomeContainer)