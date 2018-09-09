SELECT students.*, comp.category, comp.competency_name, comp.description, status.comp_id, status.passed FROM students
JOIN status on(status.student_id = students.id)
JOIN competencies as comp on(comp.id = status.comp_id)
WHERE students.id = $1;