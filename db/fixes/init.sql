-- Drop Tables
DROP TABLE IF EXISTS status;
DROP TABLE IF EXISTS assessments_status;
DROP TABLE IF EXISTS assessments;
DROP TABLE IF EXISTS html_css_status;
DROP TABLE IF EXISTS html_css_competencies;
DROP TABLE IF EXISTS competencies;
DROP TABLE IF EXISTS invited_staff_list;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS users;

-- Create Tables 

CREATE TABLE users(
id SERIAL PRIMARY KEY NOT NULL
, sub TEXT
, name TEXT
, position TEXT NOT NULL
, email TEXT UNIQUE NOT NULL
, assigned_cohort TEXT
);

CREATE TABLE invited_staff_list (
    id SERIAL PRIMARY KEY NOT NULL
    ,position TEXT
    ,email TEXT
    ,assigned_cohort TEXT
    ,registered BOOLEAN NOT NULL
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
, active BOOLEAN
);

CREATE TABLE status(
id SERIAL PRIMARY KEY NOT NULL
, comp_id INTEGER NOT NULL REFERENCES competencies(id)
, student_id INTEGER NOT NULL REFERENCES students(id)
, passed BOOLEAN NOT NULL
, notes TEXT
);

CREATE TABLE assessments(
id SERIAL PRIMARY KEY NOT NULL
, assessment_name TEXT NOT NULL
, active BOOLEAN
);

CREATE TABLE assessments_status(
id SERIAL PRIMARY KEY NOT NULL
, assess_id INTEGER NOT NULL REFERENCES assessments(id)
, student_id INTEGER NOT NULL REFERENCES students(id)
, passed BOOLEAN NOT NULL
, notes TEXT
);

CREATE TABLE html_css_competencies(
id SERIAL PRIMARY KEY NOT NULL
, category TEXT NOT NULL
, competency_name TEXT NOT NULL
, description TEXT NOT NULL
, active BOOLEAN
);

CREATE TABLE html_css_status(
id SERIAL PRIMARY KEY NOT NULL
, comp_id INTEGER NOT NULL REFERENCES html_css_competencies(id)
, student_id INTEGER NOT NULL REFERENCES students(id)
, passed BOOLEAN NOT NULL
, notes TEXT
);


--insert dummy data
INSERT INTO invited_staff_list (position, email, assigned_cohort, registered) VALUES ('Mentor', 'andrew.nam@devmounta.in', 'wpx7', false);

--insert tracked comps
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Tooling','Git', 'setting up .gitignore, package.json etc...', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('React','ES6_1', 'import, export, destructuring', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('React','ES6_2', 'arrow functions', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('React','Class_1', 'render, JSX, nested components', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('React','Class_2', 'state, setState, constructors', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('React','Class_3', 'events', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('React','Functional', 'create functional components that receive and render props', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('React','axios', 'interact with the web via axios and REST', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('React','Routing_1', 'can add ReactRouter to their code base (HashRouter)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('React','Routing_2', 'can add ReactRouter to their code base (Link)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('React','Routing_3', 'can add ReactRouter to their code base (Switch, Route, component)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('React','Routing_4', 'can add ReactRouter to their code base (match object)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('React','Lifecycle', 'can use componentDidMount in their code', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('React','Redux_1', 'can utilize Redux in their code to manage state (store, reducer)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('React','Redux_2', 'can utilize Redux in their code to manage state (connect, mapStateToProps, share state)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('React','Redux_3', 'can utilize Redux in their code to manage state (actions, action builders, mapDispatchToProps object)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Server','Express_1', 'can create Node servers using the Express package (Server running)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Server','Express_2', 'can create Node servers using the Express package (Serving static files)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Server','Rest_1', 'can create a RESTful API (Status codes)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Server','Rest_2', 'can create a RESTful API (body-parser)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Server','Rest_3', 'can create a RESTful API (params)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Server','Rest_4', 'can create a RESTful API (queries)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Server','Rest_5', 'can create a RESTful API (GET endpoint)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Server','Rest_6', 'can create a RESTful API (POST endpoint)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Server','Rest_7', 'can create a RESTful API (PUT endpoint)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Server','Rest_8', 'can create a RESTful API (DELETE endpoint)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Server','Rest_9', 'can store data in sessions', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Database','Statements_1', 'can create tables in a database', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Database','Statements_2', 'can create SQL statements to manipulate data in their databases (select)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Database','Statements_3', 'can create SQL statements to manipulate data in their databases (insert)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Database','Statements_4', 'can create SQL statements to manipulate data in their databases (join)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Database','Patterns', 'can utilize SQL Patterns in their databases (one-many)', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Database','Massive_1', 'can connect to their database in their NodeJS servers using Massive', true);
INSERT INTO competencies (category, competency_name, description, active) VALUES ('Database','Massive_2', 'can run SQL commands in their NodeJS servers using Massive', true);

INSERT INTO html_css_competencies (category, competency_name, description, active) VALUES 
('CSS','Box Model', 'margin, border, padding, box-sizing', true)
,('CSS','Float/Display', 'Student can utilize float and display CSS properties to change the layout and visual aspects', true)
,('CSS','Font/Background', 'font-weight, color, font-size, background-color, background-image', true)
,('CSS','Position', 'relative, absolute, fixed', true)
,('CSS','Selectors', '# . > + " "(this is a space)', true)
,('CSS (Elective)','Animation', 'Student can utilize keyframes, transition, and transform ', true)
,('CSS (Elective)','Fancy effects', 'Student can use box shadow, gradients, and text effects to create fancy visual effects', true)
,('CSS (Elective)','Flexbox', 'Student can use flexbox (justify-content, align-items, flex-wrap, flex-direction, display: flex)', true)
,('CSS (Elective)','Grid/Variables', 'Student can implement CSS variables and CSS grid in modern browsers', true)
,('CSS (Elective)','Media queries', 'Student can use media queries to create responsive web page (media queries, media types)', true)
,('CSS (Elective)','Pseudo selectors', 'Student can utilize pseudo selectors to influence styling based on disabled, focus, hover, nth-child', true)
,('HTML','Elements (attributes)', 'Student can render elements onto a web page (attributes)', true)
,('HTML','Elements (blocks)', 'Student can render p, span and div tags', true)
,('HTML','Elements (content)', 'Students can render lists and images to the page', true)
,('HTML','Elements (headers)', 'Student can render h1 and h2 tags to the page', true)
,('HTML','Elements (link)', 'Student can render the link tag to the page NOTE: not the anchor <a></a> tag', true)
,('HTML','Elements (sections)', 'Student can render an article, section, footer tag', true)
,('HTML','Elements (self closing)', 'Student can render a self closing tag', true)
,('HTML','Elements (skeleton)', 'can render html, head, body', true)
,('HTML','Scripts', 'Student can run JavaScript on their websites using a script tag', true)
,('HTML (Elective)','Accessability', 'Student can utilize modern best practices to make accessible website with ARIA and alt tags (ARIA, alt)', true)
,('HTML (Elective)','HTML5', 'Student can use HTML5 elements such as video, audio, etc', true)
,('HTML (Elective)','Meta data', 'Student can provided meta data, such as title and description, keywords, viewport', true)
,('HTML (Elective)','Semantics', 'Student can use web semantics and can apply best practices in their HTML files (built in and custom tags)', true)
,('HTML (Elective)','SEO', 'Student can implement SEO practices in descriptions, keywords, and can discuss pageRank (desc, keywords, pageRank)', true);


INSERT INTO assessments (assessment_name, active)
VALUES ('Arrays-1', true)
,('Data Types', true)
,('Functions 1', true)
,('Functions 2', true)
,('Scope', true)
,('For Loops', true)
,('Callbacks 1', true)
,('Callbacks 2', true)
,('Arrays-2', true)
,('Arrays-3', true)
,('Objects', true)
,('ES6', true)
,('Async + Promises', true)
,('JSON', true)
,('Closures', true)
,('Context 1', true)
,('Context 2', true)
,('Constructors - classes', true)
,('Constructors - functions', true)
,('Prototypes', true)
,('Built-In Prototypes', true);

SELECT * FROM students;
SELECT * FROM users;
SELECT * FROM competencies;
SELECT * FROM status;
SELECT * FROM assessments_status;