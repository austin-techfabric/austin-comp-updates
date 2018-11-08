import React, { Component } from "react";
import { staffContext } from "./staffContext";
import { Link } from "react-router-dom";

class MobileLinks extends Component {
	render() {
		return (
			<div className="nav-links-mobile-container">
				<div className="hamburger-icon">{this.props.children}</div>
				<div className={this.props.toggle ? "links hide" : "links"}>
					{this.props.staffContext.student ? (
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>

							<li>
								<Link to="/student_profile">Profile</Link>
							</li>

							<li>
								<span
									onClick={
										this.props.staffContext.staffMethods
											.logout
									}>
									Logout
								</span>
							</li>
						</ul>
					) : (
						<ul>
							<li>
								<Link to="/">Login</Link>
							</li>
						</ul>
					)}
				</div>
			</div>
		);
	}
}
export default staffContext(MobileLinks);
