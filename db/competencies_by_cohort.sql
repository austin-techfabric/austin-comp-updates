SELECT DISTINCT status.comp_id, competencies.competency_name FROM students
JOIN status on(status.student_id = students.id)
JOIN competencies on(competencies.id = status.comp_id)
WHERE students.cohort = $1
ORDER BY status.comp_id;