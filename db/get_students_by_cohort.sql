SELECT * FROM students
WHERE students.cohort = $1 AND students.active = $2;
