const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const login = require('./controllers/login.js');
const students = require('./controllers/students')
require('dotenv').config();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then((db)=>{
    console.log('connected to database')
    //run init on startup
    db.init();
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
}))

app.post('/api/register', login.register)
app.post('/api/login', login.login)

app.route('/api/students')
.get(students.readStudents)
.post(students.createStudent)

app.get('/api/get_students_by_cohort/:cohort', students.readStudentsByCohort)
app.get('/api/get_student_status/:id', students.readStudentIdAndStatus)

const PORT = 4000;
app.listen(PORT, ()=> console.log(`Server listening on port ${4000}`));