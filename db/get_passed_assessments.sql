SELECT DISTINCT students.id, students.name, students.email, sum(passed::int) as assessments_passed FROM students
JOIN assessments_status on(assessments_status.student_id = students.id)
WHERE students.cohort = $1
GROUP BY students.id;