UPDATE html_css_status 
SET passed = $2
WHERE student_id = $1 AND comp_id = $3;

SELECT students.*, comp.category, comp.competency_name, comp.description, html_css_status.passed, html_css_status.comp_id FROM students
JOIN html_css_status on(html_css_status.student_id = students.id)
JOIN html_css_competencies as comp on(comp.id = html_css_status.comp_id)
WHERE students.id = $1
ORDER BY html_css_status.comp_id;