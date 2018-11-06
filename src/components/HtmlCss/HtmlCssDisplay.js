import React from "react";
import StudentCard from "./StudentCard";
import { Link } from "react-router-dom";

const DashboardDisplay = (props) => {
	return (
		<div className="dashboard-display">
			<div className="mapped-student-container">
				<h1>HTML/CSS Competencies</h1>
				<header>
					<div>Name</div>
					<div>Email</div>
					<div>Completion</div>
				</header>
				{props.staffContext.assignmentsByCohort
					? props.staffContext.assignmentsByCohort.map((student) => {
							return (
								<Link to={`/student/html_css/${student.id}`}>
									<StudentCard
										key={student.id}
										{...props}
										{...student}
									/>
								</Link>
							);
					  })
					: "Loading..."}
			</div>
		</div>
	);
};

export default DashboardDisplay;
