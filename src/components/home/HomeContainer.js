import React, { Component } from 'react';
import LoginDisplay from './LoginDisplay';
import { context } from '../shared/Context';
import DashboardContainer from './DashboardContainer';

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
            <div className='home-container'>
                {this.props.context.user
                    ?
                    <DashboardContainer />
                    :
                    <LoginDisplay login={this.props.context.userMethods.login} changeHandler={this.changeHandler} {...this.state} />                
                }
            </div>
        );
    }
}

export default context(HomeContainer)