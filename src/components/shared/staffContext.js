import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const StaffContext = React.createContext();

class ContextProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "",
			cohort: "",
			student: "",
			studentListByCohort: [],
			fullCohortStats: [],
			invitedStaffList: [],
			togglableAssignmentList: [],
			assignmentsByCohort: [],
			studentAssignment: [],
			staffList: [],
			downloadableList: [],
			assignmentType: "competencies",
			changeCohort: (assignmentType, cohort) => {
				this.setState(() => {
					this.state.studentMethods.getStudents(cohort);
					this.state.studentMethods.getCohortStats(
						assignmentType,
						cohort
					);
					this.state.studentMethods.getDownloadableListByCohort(
						cohort,
						assignmentType
					);
					return {
						cohort: cohort,
						assignmentType: assignmentType
					};
				});
			},
			changeCohortAllViews: (assignmentType, cohort) => {
				this.setState(() => {
					this.state.studentMethods.getStudents(cohort);
					this.state.studentMethods.getCohortStats(
						assignmentType,
						cohort
					);
					this.state.studentMethods.getAssignmentsByCohort(
						cohort,
						assignmentType
					);
					return {
						cohort: cohort,
						assignmentType: assignmentType
					};
				});
			},
			staffMethods: {
				getUser: () => {
					axios
						.get("/api/get_logged_in_user")
						.then(({ data: user }) => {
							this.setState(() => {
								this.state.studentMethods.getStudents(
									user.assignedCohort
								);
								this.state.studentMethods.getCohortStats(
									this.state.assignmentType,
									user.assignedCohort
								);
								this.state.studentMethods.getDownloadableListByCohort(
									user.assignedCohort,
									this.state.assignmentType
								);
								return {
									user: user,
									cohort: user.assignedCohort
								};
							});
						});
				},
				getListOfTogglableAssignments: (assignment) => {
					axios
						.get(
							`/api/get_list_of_available_assignments/${assignment}`
						)
						.then(({ data: togglableAssignmentList }) => {
							this.setState({
								togglableAssignmentList: togglableAssignmentList
							});
						});
				},
				updateTogglableAssignment: (
					assignment_id,
					active,
					assignment
				) => {
					axios
						.put(
							`/api/get_list_of_available_assignments/${assignment}`,
							{ id: assignment_id, active: active }
						)
						.then(({ data: togglableAssignmentList }) => {
							this.setState({
								togglableAssignmentList: togglableAssignmentList
							});
						});
				},
				getInvitedStaff: () => {
					axios
						.get("/api/invited_staff")
						.then(({ data: invitedStaffList }) => {
							this.setState({
								invitedStaffList: invitedStaffList
							});
						})
						.catch((err) => console.log(err));
				},
				inviteStaff: (staffPosition, staffEmail) => {
					const newStaff = {
						position: staffPosition,
						email: staffEmail
					};
					axios
						.post("/api/invited_staff", newStaff)
						.then(({ data: invitedStaffList }) => {
							this.setState({
								invitedStaffList: invitedStaffList
							});
						})
						.catch((err) => console.log(err));
				},
				getAllStaff: () => {
					axios.get("/api/staff").then(({ data: staffList }) => {
						this.setState({
							staffList: staffList
						});
					});
				},
				logout: () => {
					axios.post("/api/logout").then(() => {
						this.setState(
							{
								user: "",
								student: ""
							},
							this.props.history.push("/")
						);
					});
				}
			},
			studentMethods: {
				getStudents: (cohort) => {
					axios.get(`/api/students/${cohort}`).then((response) => {
						this.setState({
							studentListByCohort: response.data
						});
					});
				},
				getCohortStats: (assignmentType, cohort) => {
					console.log(assignmentType, cohort);
					axios
						.get(
							`/api/get_cohort_stats_by_assignment/${assignmentType}/${cohort}`
						)
						.then(({ data: fullCohortStats }) => {
							this.setState(() => {
								this.state.studentMethods.getDownloadableListByCohort(
									cohort,
									assignmentType
								);
								return {
									assignmentType: assignmentType,
									fullCohortStats: fullCohortStats
								};
							});
						});
				},
				addStudentToCohort: (name, email, cohort) => {
					axios
						.post(`/api/students/${cohort}`, { name, email })
						.then(({ data: studentListByCohort }) => {
							this.setState({
								studentListByCohort: studentListByCohort
							});
						});
				},
				getAssignmentsByCohort: (cohort, assignment) => {
					console.log(cohort, assignment);
					axios
						.get(
							`/api/get_competencies_by_cohort/${cohort}?assignment=${assignment}`
						)
						.then(({ data: assignmentsByCohort }) => {
							this.setState({
								assignmentsByCohort: assignmentsByCohort
							});
						});
				},
				getStudentAssessmentById: (id) => {
					axios
						.get(`/api/get_student_assessments_by_id/${id}`)
						.then(({ data: studentAssignment }) => {
							this.setState({
								studentAssignment: studentAssignment
							});
						});
				},
				markAssessComplete: (assessmentName, id, passed) => {
					console.log("asseshit");
					axios
						.put(
							`/api/get_student_assessments_by_id/${id}?assessmentName=${assessmentName}&passed=${passed}`
						)
						.then(({ data: studentAssignment }) => {
							this.setState({
								studentAssignment: studentAssignment
							});
						});
				},
				markHtmlCssComplete: (assessmentName, id, passed) => {
					console.log("htmlhit");
					axios
						.put(
							`/api/get_student_html_css_by_id/${id}?compName=${assessmentName}&passed=${passed}`
						)
						.then(({ data: studentAssignment }) => {
							console.log(
								"response from checking off html css",
								studentAssignment
							);
							this.setState({
								studentAssignment: studentAssignment
							});
						});
				},
				getStudentCompetenciesById: (id) => {
					axios
						.get(`/api/get_student_competencies_by_id/${id}`)
						.then(({ data: studentAssignment }) => {
							this.setState({
								studentAssignment: studentAssignment
							});
						});
				},
				getStudentHtmlCssById: (id) => {
					axios
						.get(`/api/get_student_html_css_by_id/${id}`)
						.then(({ data: studentAssignment }) => {
							this.setState({
								studentAssignment: studentAssignment
							});
						});
				},
				addNoteToAssignment: (
					notes,
					assessId,
					studentId,
					assignmentType
				) => {
					axios
						.put(
							`/api/update_student_notes_by_assignment/${assignmentType}`,
							{ notes, assessId, studentId }
						)
						.then(({ data: studentAssignment }) => {
							this.setState({
								studentAssignment: studentAssignment
							});
						});
				},
				markCompComplete: (compName, id, passed) => {
					console.log("asseshit");
					axios
						.put(
							`/api/get_student_competencies_by_id/${id}?compName=${compName}&passed=${passed}`
						)
						.then(({ data: studentAssignment }) => {
							this.setState({
								studentAssignment: studentAssignment
							});
						});
				},
				getDownloadableListByCohort: (cohort, assignment) => {
					axios
						.get(
							`/api/get_downloadable_list_by_cohort/${cohort}?assignment=${assignment}`
						)
						.then(({ data: downloadableList }) => {
							this.setState({
								downloadableList: downloadableList
							});
						});
				},
				setStudentLogin: (student) => {
					this.setState({
						student: student
					});
				},
				setStudentLogOut: () => {
					this.setState({
						student: ""
					});
				}
			}
		};
	}

	componentDidMount() {
		if (!this.state.user) {
			this.state.staffMethods.getUser();
		}
	}

	render() {
		return (
			<StaffContext.Provider value={{ ...this.state }}>
				{this.props.children}
			</StaffContext.Provider>
		);
	}
}

export default withRouter(ContextProvider);

export function staffContext(Component) {
	return (props) => {
		return (
			<StaffContext.Consumer>
				{(context) => (
					<Component {...props} staffContext={{ ...context }} />
				)}
			</StaffContext.Consumer>
		);
	};
}
