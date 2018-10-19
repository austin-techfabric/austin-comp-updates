SELECT DISTINCT html_css_status.comp_id, html_css_competencies.competency_name FROM students
JOIN html_css_status on(html_css_status.student_id = students.id)
JOIN html_css_competencies on(html_css_competencies.id = html_css_status.comp_id)
WHERE students.cohort = $1
ORDER BY html_css_status.comp_id;