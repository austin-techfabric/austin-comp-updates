SELECT DISTINCT students.id, students.name, students.email, sum(passed::int) as competencies_passed FROM students
JOIN status on(status.student_id = students.id)
WHERE students.cohort = $1 AND students.active = true
GROUP BY students.id;