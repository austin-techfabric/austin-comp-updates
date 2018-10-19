UPDATE html_css_status 
SET passed = $2
WHERE student_id = $1 AND assess_id = $3;

SELECT students.*, html_css_competencies.competency_name, html_css_status.comp_id, html_css_status.passed FROM students
JOIN html_css_status on(html_css_status.student_id = students.id)
JOIN html_css_competencies on(html_css_competencies.id = html_css_status.comp_id)
WHERE students.id = $1
ORDER BY html_css_competencies.id;