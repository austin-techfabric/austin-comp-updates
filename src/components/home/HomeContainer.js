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

    login = () => {
        const redirectUri = encodeURIComponent(`${window.location.origin}/callback`);
        window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`
    }

    render() {
        return (
            <div  className='home-container'>
                {/* this.props.context.userMethods.login */}
                <LoginDisplay login={this.login} changeHandler={this.changeHandler} {...this.state} />
                
            </div>
        );
    }
}

export default context(HomeContainer)