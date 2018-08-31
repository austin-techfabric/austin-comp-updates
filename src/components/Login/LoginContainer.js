import React, { Component } from 'react';
import LoginDisplay from './LoginDisplay'
import axios from 'axios';

export default class LoginContainer extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }
    componentDidMount(){
        axios.get('/api/login').then(({data: user})=>{
            console.log(user);
        })
    }
    render() {
        return (
            <div>
                <LoginDisplay/>
                dhdfa
            </div>
        );
    }
}