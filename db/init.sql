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
INSERT INTO users (name, password, position, email) VALUES ('joh borup', 'password', 'Lead Mentor', 'joshborup@devmounta.in');
INSERT INTO students (name, cohort, email, active) VALUES ('josh borup', 'wpx3', 'joshborup@gmail.com', true);


--insert tracked comps
INSERT INTO competencies (category, competency_name, description) VALUES ('Tooling','Git', 'setting up .gitignore, package.json etc...');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','ES6_1', 'import, export, destructuring');
INSERT INTO competencies (category, competency_name, description) VALUES ('React','ES6_2', 'arrow functions');



--insert comp tracker
INSERT INTO status (comp_id, student_id, passed) VALUES (1, 1, TRUE);
INSERT INTO status (comp_id, student_id, passed) VALUES (2, 1, FALSE);

-- SELECT * FROM students;
-- SELECT * FROM users;
-- SELECT * FROM competencies;
-- SELECT * FROM status;

-- SELECT students.*, comp.category, comp.competency_name, comp.description, status.passed FROM students
-- JOIN status on(status.student_id = students.id)
-- JOIN competencies as comp on(comp.id = status.comp_id);
