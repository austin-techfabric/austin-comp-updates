-- SELECT status.*, students.name, students.id as st_id FROM students JOIN status
-- ON (students.id = status.student_id)
-- WHERE cohort = 'wpx8' AND students.id = 1
-- ORDER BY comp_id desc;

INSERT INTO status (comp_id, student_id, passed) VALUES (35, 16, false);
INSERT INTO status (comp_id, student_id, passed) VALUES (36, 16, false);

-- SELECT * FROM competencies;

-- SELECT * FROM status WHERE id = 1;
-- SELECT * FROM Students;
-- INSERT INTO competencies (category, competency_name, description, active) VALUES ('Database', 'Statements', 'Alter table, Student can alter existing tables in a database', true);

-- UPDATE competencies
-- SET description = 'Student can use class based components in React and its features (.bind)'
-- WHERE id = 35
