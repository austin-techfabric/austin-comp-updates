import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

export const AppContext = React.createContext();

class ContextProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:'',
            student:[],
            students: [],
            studentMethods:{
                getStudents: () => {
                    axios.get('/api/students').then(response => {
                        this.setState({
                            students: response.data
                        })
                    })
                },
                getStudentsByCohort: (cohort, active) => {
                    console.log(cohort, active)
                    axios.get(`/api/get_students_by_cohort/${cohort}/?active=${active}`).then(response => {
                        this.setState({
                            students: response.data
                        })
                    })
                },
                getStudentById: (id) => {
                    axios.get(`/api/get_student_by_id/${id}`).then(({data: student}) => {
                        this.setState({
                            student: student
                        })
                    })
                }
            },
            userMethods: {
                login: (email, password) => {
                    console.log(this.props)
                    axios.post('/api/login', {email, password}).then(({data: user})=>{
                        this.setState({
                            user: user
                        })
                    })
                },
                getUser: () => {
                    axios.get('/api/get_logged_in_user').then(({data: user})=>{
                        console.log('resetting session')
                        this.setState({
                            user: user
                        })
                    })
                },
                logout: ()=> {
                    axios.post('/api/logout').then(()=>{
                        this.setState({
                            user: ''
                        }, this.props.history.push('/'))
                    })
                }
            }
        }
    }

    componentDidMount(){
        if(!this.state.user){
            this.state.userMethods.getUser();
        }
    }
 
    render() {
        return  <AppContext.Provider value={{...this.state}}>
                     {this.props.children}
                </AppContext.Provider>
    }
}

export default withRouter(ContextProvider)

export function context(Component) {
    return (props) => {
        return (
            <AppContext.Consumer>
            {context => <Component {...props} context={context} />}
            </AppContext.Consumer>
        );
    };
}
