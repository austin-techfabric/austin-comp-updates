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
    //run init on startup
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

app.get('/api/cool', (req, res)=> res.send('worked!'));

app.post('/api/register', login.register);
app.post('/api/login', login.login);
app.post('/api/logout', login.logout);

app.route('/api/students')
.get(students.readStudents)
.post(students.createStudent);

app.route('/api/invited_staff')
.get(userCont.getAllInvitedUsers)
.post(userCont.inviteUser);

app.get('/api/get_logged_in_user', userCont.readLoggedInUser);
app.get('/api/get_users_list', userCont.getAllUsers);

app.get('/api/get_students_by_cohort/:cohort', students.readStudentsByCohort);
app.get('/api/get_student_status/:id', students.readStudentIdAndStatus);
app.get('/api/get_student_by_id/:id', students.readStudentById);
app.put(`/api/mark_competency_complete/:id`, students.markCompComplete);

app.get('/api/students_assessments/:cohort', students.getStudentsAssessments);
app.get('/api/get_student_assessments_by_id/:id', students.getStudentAssessmentsById);
app.put('/api/mark_assessment_complete/:id', students.markAssessmentComplete);

app.get('/api/get_assessments_by_cohort/:assignment/:cohort', students.getFullCohortStats);

const PORT = 4000;
app.listen(PORT, ()=> console.log(`Server listening on port ${4000}`));