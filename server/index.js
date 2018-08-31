const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const massive = require('massive');
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

app.get('/api/login', login.read)

app.route('/api/students')
.get(students.readStudents)
.post(students.createStudent)

const PORT = 4000;
app.listen(PORT, ()=> console.log(`Server listening on port ${4000}`));