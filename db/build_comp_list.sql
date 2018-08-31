INSERT INTO status (comp_id, student_id, passed) VALUES (1, $1, FALSE);
INSERT INTO status (comp_id, student_id, passed) VALUES (2, $1, FALSE);
SELECT * FROM students;