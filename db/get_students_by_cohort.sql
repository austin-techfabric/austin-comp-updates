SELECT DISTINCT students.id, students.name, students.email, COUNT(status.passed) as competencies_left FROM students
JOIN status on(status.student_id = students.id)
WHERE students.cohort = $1 AND students.active = $2 AND status.passed = false
GROUP BY students.id;