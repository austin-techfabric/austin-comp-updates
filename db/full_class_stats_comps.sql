SELECT competency_name, count(competency_name) FROM status
JOIN competencies on(competencies.id = status.comp_id)
JOIN students on (students.id = status.student_id)
WHERE passed = $1 AND cohort = $2
GROUP BY competency_name;