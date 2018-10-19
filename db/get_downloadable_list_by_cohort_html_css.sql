SELECT students.*, comp.category, comp.competency_name, comp.description, html_css_status.comp_id, html_css_status.passed FROM students
JOIN html_css_status on(html_css_status.student_id = students.id)
JOIN html_css_competencies as comp on(comp.id = html_css_status.comp_id)
WHERE students.cohort = $1 AND passed = true;