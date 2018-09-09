-- UPDATE status 
-- SET passed = $2
-- WHERE student_id = $1 AND comp_id = $3;

-- SELECT students.*, comp.category, comp.competency_name, comp.description, status.passed, status.comp_id FROM students
-- JOIN status on(status.student_id = students.id)
-- JOIN competencies as comp on(comp.id = status.comp_id)
-- WHERE students.id = $1
-- ORDER BY status.comp_id;

UPDATE status 
SET passed = $2
WHERE student_id = $1 AND comp_id = $3;

SELECT students.*, comp.category, comp.competency_name, comp.description, status.passed, status.comp_id FROM students
JOIN status on(status.student_id = students.id)
JOIN competencies as comp on(comp.id = status.comp_id)
WHERE students.id = $1
ORDER BY status.comp_id;