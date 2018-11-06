import React from "react";
import OverView from "./OverView";

const DashboardDisplay = (props) => {
	return (
		<div className="dashboard-display-full-class">
			<header>
				<div>
					<h2>
						<span className="dashboard-name">
							{props.staffContext.user.name}
						</span>
						<span className="spacer">|</span>
						<span>{props.staffContext.user.position}</span>
					</h2>
				</div>

				<div>
					<h1>Dashboard</h1>
				</div>

				<div>
					<h2>{`${props.date}`}</h2>
				</div>
			</header>
			<div>
				<OverView {...props} />
			</div>
		</div>
	);
};

export default DashboardDisplay;
