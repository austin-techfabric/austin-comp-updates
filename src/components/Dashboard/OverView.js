import React from "react";
import CohortBarGraph from "./CohortBarGraph";
import Downloadable from "./Downloadable";

const Overview = (props) => {
	return (
		<div className="overview-container">
			<div>
				<div />

				<div className="type-container">
					<span>Tracker</span> |{" "}
					<select
						name="assignmentType"
						onChange={(e) => {
							props.staffContext.studentMethods.getCohortStats(
								e.target.value,
								props.staffContext.cohort
							);
						}}
						value={props.staffContext.assignmentType}>
						<option defaultValue value="competencies">
							Competencies
						</option>
						<option value="assessments">Assessments</option>
						<option value="html_css">HTML/CSS</option>
					</select>
				</div>
				<div>
					<Downloadable />
				</div>
			</div>

			<CohortBarGraph {...props} />
		</div>
	);
};

export default Overview;
