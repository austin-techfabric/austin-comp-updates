SELECT competencies.id, comp_id, student_id, passed, notes, competency_name, competencies.active, status.id as status_id, name, cohort, email FROM status
JOIN competencies on(competencies.id = status.comp_id)
JOIN students on (students.id = status.student_id)
WHERE cohort = $1;