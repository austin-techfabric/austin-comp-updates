import React from "react";

const ClassListDisplay = (props) => {
	const classList = props.staffContext.studentListByCohort.map((student) => {
		return (
			<div key={student.id} className="student-class-list-card-container">
				<div>{student.name}</div>
				<div>{student.email}</div>
			</div>
		);
	});

	return (
		<div>
			<header>
				<h1>Students</h1>
			</header>

			<div>
				Name:{" "}
				<input
					name="name"
					onChange={(e) =>
						props.changeHandler(e.target.name, e.target.value)
					}
					value={props.name}
				/>
				Email:{" "}
				<input
					name="email"
					onChange={(e) =>
						props.changeHandler(e.target.name, e.target.value)
					}
					value={props.email}
				/>
				<button
					onClick={() => {
						props.staffContext.studentMethods.addStudentToCohort(
							props.name,
							props.email,
							props.staffContext.cohort
						);
						props.clearInputs();
					}}>
					Add Student
				</button>
			</div>
			{classList}
			<div />
		</div>
	);
};

export default ClassListDisplay;
