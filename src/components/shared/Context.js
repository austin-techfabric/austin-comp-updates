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
            staff_position:'Mentor',
            staff_email:'',
            staffList: [],
            invitedStaffList: [],
            user:'',
            assignmentType: 'competencies',
            assignments: [],
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
                markAssessComplete: (assessmentName, id, passed) => {
                    axios.put(`/api/mark_assessment_complete/${id}?assessmentName=${assessmentName}&passed=${passed}`).then(({data: student}) => {
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
                },
                getStudentsAssessments: () => {
                    axios.get(`/api/students_assessments/${this.state.cohort || this.state.user.assignedCohort}`).then(response => {
                        this.setState({
                            students: response.data
                        })
                    })
                },
                getStudentAssessmentById: (id) => {
                    axios.get(`/api/get_student_assessments_by_id/${id}`).then(({data: student}) => {
                        this.setState({
                            student: student
                        })
                    })
                },
                getAssignmentsByCohort: () => {
                    let statToGrab = this.state.assignmentType || 'competencies';
                    axios.get(`/api/get_assessments_by_cohort/${statToGrab}/${this.state.cohort || this.state.user.assignedCohort}`).then(({data: assignments}) => {
                        this.setState({
                            assignments: assignments
                        })
                    })
                },
                
            },
            userMethods: {
                login: (email, password) => {
                    axios.post('/api/login', {email, password}).then(({data: user})=>{
                        this.setState({
                            user: user
                        }, () => {
                            this.state.studentMethods.getAssignmentsByCohort()
                            this.props.history.push('/dashboard')
                        })
                    })
                },
                inviteStaff:() => {
                    const newStaff = {
                        position: this.state.staff_position,
                        email:this.state.staff_email
                    }

                    axios.post('/api/invited_staff', newStaff).then(({data: invitedStaffList}) => {
                        this.setState({
                            staff_position: '',
                            staff_email: '',
                            invitedStaffList: invitedStaffList
                        })
                    }).catch(err => console.log(err))
                },
                getInvitedStaff: () => {
                    axios.get('/api/invited_staff').then(({data: invitedStaffList}) => {
                        this.setState({
                            invitedStaffList: invitedStaffList
                        })
                    }).catch(err => console.log(err))
                },
                getUser: () => {
                    axios.get('/api/get_logged_in_user').then(({data: user})=>{
                        this.setState({
                            user: user
                        })
                    })
                },
                getAllStaff: () => {
                    axios.get('/api/get_users_list').then(({data: staffList}) => {
                        this.setState({
                            staffList: staffList
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
                const grabStudents =() =>{
                   return axios.get(`/api/get_students_by_cohort/${value}/?active=${true}`)
                }

                const grabAssignments = () =>{
                   let statToGrab = this.state.assignmentType || 'competencies';
                   return axios.get(`/api/get_assessments_by_cohort/${statToGrab}/${value}`)
                }

                axios.all([grabAssignments(), grabStudents()]).then(axios.spread(({data: assignments}, {data:students})=>{
                    this.setState({
                        assignments: assignments,
                        [key]:value,
                        students: students
                    })
                }))
            },
            changeAssignmentHandler: (key, value)=> {
                const grabStudents =() =>{
                   return axios.get(`/api/get_students_by_cohort/${this.state.cohort || this.state.user.assignedCohort}/?active=${true}`)
                }

                const grabAssignments = () =>{
                   return axios.get(`/api/get_assessments_by_cohort/${value}/${this.state.cohort || this.state.user.assignedCohort}`)
                }

                axios.all([grabAssignments(), grabStudents()]).then(axios.spread(({data: assignments}, {data:students})=>{
                    this.setState({
                        assignments: assignments,
                        [key]:value,
                        students: students
                    })
                }))
            }
        }
    }

    componentDidMount(){
        this.state.studentMethods.getAssignmentsByCohort()
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
