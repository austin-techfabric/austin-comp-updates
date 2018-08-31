import React, { Component } from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

export default class ContextProvider extends Component {
    constructor(){
        super()

        this.state = {
            students: [],
            methods:{
                getStudents: () => {
                    axios.get('/api/students').then(response => {
                        this.setState({
                            students: response.data
                        })
                    })
                },
                getStudentsByCohort: (cohort, active) => {
                    axios.get(`/api/students/${cohort}/?active=${active}`).then(response => {
                        this.setState({
                            students: response.data
                        })
                    })
                }
            }
        }
    }
 
    render() {
        return  <AppContext.Provider value={this.state}>
                     {this.props.children}
                </AppContext.Provider>
    }
}

export function context(Component) {
    return (props) => {
        return (
            <AppContext.Consumer>
            {context => <Component {...props} context={context} />}
            </AppContext.Consumer>
        );
    };
}