import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

export const AppContext = React.createContext();

class ContextProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            cohort: '',
            active: true,
            name:'',
            email:'',
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
                getStudentsByCohort: (active) => {
                    axios.get(`/api/get_students_by_cohort/${this.state.cohort || this.state.user.assignedCohort}/?active=${active}`).then(response => {
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
                },
                markCompComplete: (competencyName, id, passed) => {
                    axios.put(`/api/mark_competency_complete/${id}?competencyName=${competencyName}&passed=${passed}`).then(({data: student}) => {
                        this.setState({
                            student: student
                        })
                    })
                },
                addStudent: (name, email, cohort) => {
                    axios.post(`/api/students`, {name, email, cohort, active: true}).then(({data: students}) => {
                        this.setState({
                            students: students,
                            name:'',
                            email:''
                        })
                    })
                }
            },
            userMethods: {
                login: (email, password) => {
                    
                    axios.post('/api/login', {email, password}).then(({data: user})=>{
                        this.setState({
                            user: user
                        }, this.props.history.push('/dashboard'))
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
            },
            changeHandler: (key, value)=> {
                
                this.setState({
                    [key]:value
                })
            },
            changeCohortHandler: (key, value)=> {
                console.log(key, value)
                axios.get(`/api/get_students_by_cohort/${value}/?active=${true}`).then(({data: students}) => {
                    console.log('students :', students);
                    this.setState({
                        [key]:value,
                        students: students
                    })
                })
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
