const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const login = require("./controllers/login.js");
const students = require("./controllers/students");
const userCont = require("./controllers/user");
const forStudents = require("./controllers/forStudents");
const helmet = require("helmet");
const middlewares = require("./controllers/helpers/middlewares");
// Security check to make sure students can only request their own data
const personalCheck = middlewares.personalInfoCheckpoint;
// Security check to make sure only logged in administrators can access endpoint
const adminCheck = middlewares.adminCheckpoint;
// General security check to make sure the current user is affiliated with DevMountain
const checkpoint = middlewares.checkpoint;

require("dotenv").config();
app.use(helmet());

app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then((db) => {
	console.log("connected to database");
	app.set("db", db);
});

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		saveUninitialized: true,
		resave: false,
		cookie: {
			// 2 weeks
			maxAge: 60 * 60 * 24 * 14 * 1000
		}
	})
);

app.get("/auth/login", login.loginForward);
app.get("/auth/devmtn/callback", login.authCallback);
app.post("/api/logout", login.logout);

//user routes
app.get("/api/get_logged_in_user", adminCheck, userCont.readLoggedInUser);
app.route("/api/get_list_of_available_assignments/:assignment")
	.get(adminCheck, userCont.getTogglableAssignmentList)
	.put(adminCheck, userCont.updateTogglableAssignment);

app.route("/api/invited_staff")
	.get(adminCheck, userCont.getInvitedStaff)
	.post(adminCheck, userCont.inviteStaff);

app.route("/api/staff").get(checkpoint, userCont.getAllStaff);

//student routes
app.route("/api/students/:cohort")
	.get(adminCheck, students.readStudents)
	.post(adminCheck, students.createStudent)
	.put(adminCheck, students.editStudent);

app.get(
	"/api/get_competencies_by_cohort/:cohort",
	adminCheck,
	students.getAssignmentsByCohort
);

app.route("/api/get_student_competencies_by_id/:id")
	.get(personalCheck, students.getCompetenciesById)
	.put(personalCheck, students.markCompComplete);

app.route(`/api/get_student_assessments_by_id/:id`)
	.get(personalCheck, students.getAssessmentsById)
	.put(adminCheck, students.markOffAssessment);

app.route(`/api/get_student_html_css_by_id/:id`)
	.get(adminCheck, students.getHtmlCssById)
	.put(adminCheck, students.markOffHTMLCSS);

app.put(
	"/api/update_student_notes_by_assignment/:assignment",
	adminCheck,
	students.updateNotes
);

// gives full cohort stats for dashboard view
app.get(
	"/api/get_cohort_stats_by_assignment/:assignment/:cohort",
	adminCheck,
	students.getCohortStatsByAssignment
);

app.get("/api/get_student_info", checkpoint, forStudents.getStudentData);
// downloadables
app.get(
	"/api/get_downloadable_list_by_cohort/:cohort",
	adminCheck,
	userCont.getDownloadableListByCohort
);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../build/index.html"));
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server listening on port ${4000}`));
