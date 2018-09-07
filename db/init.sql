-- Drop Tables
DROP TABLE IF EXISTS status;
DROP TABLE IF EXISTS competencies;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS users;

-- Create Tables 

CREATE TABLE users(
id SERIAL PRIMARY KEY NOT NULL
, name TEXT NOT NULL
, password TEXT NOT NULL
, position TEXT NOT NULL
, email TEXT UNIQUE
, assigned_cohort TEXT
);


CREATE TABLE students(
id SERIAL PRIMARY KEY NOT NULL
, name TEXT NOT NULL
, cohort TEXT NOT NULL
, email TEXT UNIQUE
, active BOOLEAN NOT NULL
);

CREATE TABLE competencies(
id SERIAL PRIMARY KEY NOT NULL
, category TEXT NOT NULL
, competency_name TEXT NOT NULL
, description TEXT NOT NULL
);

CREATE TABLE status(
id SERIAL PRIMARY KEY NOT NULL
, comp_id INTEGER NOT NULL REFERENCES competencies(id)
, student_id INTEGER NOT NULL REFERENCES students(id)
, passed BOOLEAN NOT NULL
);

--insert dummy data
INSERT INTO users (name, password, position, email, assigned_cohort) VALUES ('josh borup', '$2b$12$u4A7tB2U837TTZKXTg37c.UiPcAyi3dw3TOzaC4cJsEeO0uXyV75K', 'Lead Mentor', 'joshborup@devmounta.in', 'wpx6');
INSERT INTO students (name, cohort, email, active) VALUES ('josh borup', 'wpx3', 'joshborup@gmail.com', true);


--insert tracked comps
INSERT INTO competencies (category, competency_name, description) VALUES ('Tooling','Git', 'setting up .gitignore, package.json etc...');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','ES6_1', 'import, export, destructuring');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','ES6_2', 'arrow functions');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','Class_1', 'render, JSX, nested components');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','Class_2', 'state, setState, constructors');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','Class_3', 'events');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','Functional', 'create functional components that receive and render props');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','axios', 'interact with the web via axios and REST');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','Routing_1', 'can add ReactRouter to their code base (HashRouter)');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','Routing_2', 'can add ReactRouter to their code base (Link)');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','Routing_3', 'can add ReactRouter to their code base (Switch, Route, component)');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','Routing_4', 'can add ReactRouter to their code base (match object)');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','Lifecycle', 'can use componentDidMount in their code');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','Redux_1', 'can utilize Redux in their code to manage state (store, reducer)');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','Redux_2', 'can utilize Redux in their code to manage state (connect, mapStateToProps, share state)');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','Redux_3', 'can utilize Redux in their code to manage state (actions, action builders, mapDispatchToProps object)');
INSERT INTO competencies (category, competency_name, description) VALUES ('Server','Express_1', 'can create Node servers using the Express package (Server running)');
INSERT INTO competencies (category, competency_name, description) VALUES ('Server','Express_2', 'can create Node servers using the Express package (Serving static files)');
INSERT INTO competencies (category, competency_name, description) VALUES ('Server','Rest_1', 'can create a RESTful API (Status codes)');
INSERT INTO competencies (category, competency_name, description) VALUES ('Server','Rest_2', 'can create a RESTful API (body-parser)');
INSERT INTO competencies (category, competency_name, description) VALUES ('Server','Rest_3', 'can create a RESTful API (params)');
INSERT INTO competencies (category, competency_name, description) VALUES ('Server','Rest_4', 'can create a RESTful API (queries)');
INSERT INTO competencies (category, competency_name, description) VALUES ('Server','Rest_5', 'can create a RESTful API (GET endpoint)');
INSERT INTO competencies (category, competency_name, description) VALUES ('Server','Rest_6', 'can create a RESTful API (POST endpoint)');
INSERT INTO competencies (category, competency_name, description) VALUES ('Server','Rest_7', 'can create a RESTful API (PUT endpoint)');
INSERT INTO competencies (category, competency_name, description) VALUES ('Server','Rest_8', 'can create a RESTful API (DELETE endpoint)');
INSERT INTO competencies (category, competency_name, description) VALUES ('Server','Rest_9', 'can store data in sessions');
INSERT INTO competencies (category, competency_name, description) VALUES ('Database','Statements_1', 'can create tables in a database');
INSERT INTO competencies (category, competency_name, description) VALUES ('Database','Statements_2', 'can create SQL statements to manipulate data in their databases (select)');
INSERT INTO competencies (category, competency_name, description) VALUES ('Database','Statements_3', 'can create SQL statements to manipulate data in their databases (insert)');
INSERT INTO competencies (category, competency_name, description) VALUES ('Database','Statements_4', 'can create SQL statements to manipulate data in their databases (join)');
INSERT INTO competencies (category, competency_name, description) VALUES ('Database','Patterns', 'can utilize SQL Patterns in their databases (one-many)');
INSERT INTO competencies (category, competency_name, description) VALUES ('Database','Massive_1', 'can connect to their database in their NodeJS servers using Massive');
INSERT INTO competencies (category, competency_name, description) VALUES ('Database','Massive_2', 'can run SQL commands in their NodeJS servers using Massive');





--insert comp tracker

-- SELECT * FROM students;
-- SELECT * FROM users;
-- SELECT * FROM competencies;
-- SELECT * FROM status;

-- SELECT students.*, comp.category, comp.competency_name, comp.description, status.passed FROM students
-- JOIN status on(status.student_id = students.id)
-- JOIN competencies as comp on(comp.id = status.comp_id);
