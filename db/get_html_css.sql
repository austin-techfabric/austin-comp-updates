SELECT html_css_competencies.id, comp_id, student_id, passed, notes, competency_name, html_css_competencies.active, html_css_status.id as html_css_status_id, name, cohort, email FROM html_css_status
JOIN html_css_competencies on(html_css_competencies.id = html_css_status.comp_id)
JOIN students on (students.id = html_css_status.student_id)
WHERE cohort = $1;