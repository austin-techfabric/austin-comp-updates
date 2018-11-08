import React, { PureComponent } from "react";
import { HamburgerIcon } from "./Icons";
import MobileLinks from "./MobileLinks";
import { staffContext } from "./staffContext";
import { Link } from "react-router-dom";
import Logo from "../../styles/media/devmountain_logo.png";
import { withRouter } from "react-router-dom";

class Header extends PureComponent {
	constructor() {
		super();
		this.state = {
			toggle: true
		};
	}

	toggleMobileLinks = () => {
		this.setState((prevProps) => {
			return {
				toggle: !prevProps.toggle
			};
		});
	};

	render() {
		let assignment =
			this.props.location.pathname === "/html_css" ||
			this.props.location.pathname === "/assessments"
				? this.props.location.pathname.split("/").join("")
				: "competencies";

		console.log("this is what you are getting", assignment);
		console.log("this is the pathname", this.props.location.pathname);
		return (
			<div className="header-container">
				<div>
					<div className="header-logo">
						<img src={Logo} alt="dev mountain logo" />

						{this.props.staffContext.user ? (
							<select
								className="cohort-picker"
								value={this.props.staffContext.cohort}
								onChange={(e) =>
									this.props.staffContext.changeCohortAllViews(
										assignment,
										e.target.value
									)
								}>
								<option value="wpx1">wpx1</option>
								<option value="wpx2">wpx2</option>
								<option value="wpx3">wpx3</option>
								<option value="wpx4">wpx4</option>
								<option value="wpx5">wpx5</option>
								<option value="wpx6">wpx6</option>
								<option value="wpx7">wpx7</option>
								<option value="wpx8">wpx8</option>
								<option value="wpx9">wpx9</option>
								<option value="wpx10">wpx10</option>
							</select>
						) : null}
					</div>
					<div className="nav-links-desktop">
						{this.props.staffContext.user &&
						this.props.staffContext.user.position !== "Mentor" ? (
							<ul>
								<li>
									<Link to="/dashboard">Dashboard</Link>
								</li>
								<li className="sub-menu">
									<span>Staff</span>
									<ul className="sub-header-menu-skinny">
										<div>
											<li>
												<Link to="/trackers">
													Trackers
												</Link>
											</li>
											<li>
												<Link to="/staff">
													Add Staff
												</Link>
											</li>
										</div>
									</ul>
								</li>
								<li>
									<Link to="/class_list">Students</Link>
								</li>
								<li className="sub-menu">
									<span>Assignments</span>
									<ul className="sub-header-menu">
										<div>
											<li>
												<Link to="/competencies">
													Competencies
												</Link>
											</li>
											<li>
												<Link to="/assessments">
													Assessments
												</Link>
											</li>
											<li>
												<Link to="/html_css">
													HTML/CSS
												</Link>
											</li>
										</div>
									</ul>
								</li>
								<li>
									<span
										onClick={
											this.props.staffContext.staffMethods
												.logout
										}>
										logout
									</span>
								</li>
							</ul>
						) : this.props.staffContext.user ? (
							<ul>
								<li>
									<Link to="/dashboard">Dashboard</Link>
								</li>
								<li>
									<Link to="/class_list">Students</Link>
								</li>
								<li className="sub-menu">
									<span>Assignments</span>
									<ul className="sub-header-menu">
										<div>
											<li>
												<Link to="/competencies">
													Competencies
												</Link>
											</li>
											<li>
												<Link to="/assessments">
													Assessments
												</Link>
											</li>
											<li>
												<Link to="/html_css">
													HTML/CSS
												</Link>
											</li>
										</div>
									</ul>
								</li>
								<li>
									<span
										onClick={
											this.props.staffContext.staffMethods
												.logout
										}>
										logout
									</span>
								</li>
							</ul>
						) : this.props.staffContext.student ? (
							<ul>
								<li>
									{" "}
									<li>
										<Link to="/student_profile">Home</Link>
									</li>
								</li>
								<li>
									<span
										onClick={() => {
											this.props.staffContext.studentMethods.setStudentLogOut();
											this.props.staffContext.staffMethods.logout();
										}}>
										logout
									</span>
								</li>
							</ul>
						) : (
							<ul>
								<li />
								<li>
									<Link to="/">Login</Link>
								</li>
							</ul>
						)}
					</div>
					<MobileLinks toggle={this.state.toggle}>
						<HamburgerIcon
							toggleMobileLinks={this.toggleMobileLinks}
						/>
					</MobileLinks>
				</div>
			</div>
		);
	}
}

export default withRouter(staffContext(Header));
