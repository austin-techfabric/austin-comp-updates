import React, { Component } from 'react';
import LoginDisplay from './LoginDisplay';
import { Redirect } from 'react-router-dom';
import { staffContext } from '../shared/staffContext';

class HomeContainer extends Component {

    login = () => {
        window.location = '/auth/login'
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