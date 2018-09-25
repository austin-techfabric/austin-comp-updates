import React, { Component } from 'react';
import LoginDisplay from './LoginDisplay';
import { Redirect } from 'react-router-dom';
import { staffContext } from '../shared/staffContext';

class HomeContainer extends Component {

    login = () => {
        const redirectUri = encodeURIComponent(`${window.location.origin}/callback`);
        window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`
    }

    render() {
        return (
            <div  className='home-container'>
                {this.props.staffContext.user ? <Redirect to='/competencies' /> : <LoginDisplay login={this.login} {...this.props} />}
            </div>
        );
    }
}

export default staffContext(HomeContainer)