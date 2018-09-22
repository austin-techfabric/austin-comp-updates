const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const login = require('./controllers/login.js');
const students = require('./controllers/students')
const userCont = require('./controllers/user')
require('dotenv').config();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then((db)=>{
    console.log('connected to database')
    app.set('db', db);
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
        // 2 weeks
        maxAge: 60 * 60 * 24 * 14 * 1000
    } 
}));


app.get('/callback', login.auth0_login);
app.post('/api/logout', login.logout);

//user routes 
app.get('/api/get_logged_in_user', userCont.readLoggedInUser);
app.route('/api/get_list_of_available_assignments/:assignment')
.get(userCont.getTogglableAssignmentList)
.put(userCont.updateTogglableAssignment)

app.route('/api/invited_staff')
.get(userCont.getInvitedStaff)
.post(userCont.inviteStaff)

app.route('/api/staff')
.get(userCont.getAllStaff)


//student routes
app.route('/api/students/:cohort')
.get(students.readStudents)
.post(students.createStudent)
.put(students.editStudent);

app.get('/api/get_competencies_by_cohort/:cohort', students.getAssignmentsByCohort)

app.route('/api/get_student_competencies_by_id/:id')
.get(students.getCompetenciesById)
.put(students.markCompComplete)

app.route(`/api/get_student_assessments_by_id/:id`)
.get(students.getAssessmentsById)
.put(students.markOffAssessment)

// gives full cohort stats for dashboard view
app.get('/api/get_cohort_stats_by_assignment/:assignment/:cohort', students.getCohortStatsByAssignment);


// downloadables
app.get('/api/get_downloadable_list_by_cohort/:cohort', userCont.getDownloadableListByCohort)


const PORT = 4000;
app.listen(PORT, ()=> console.log(`Server listening on port ${4000}`));