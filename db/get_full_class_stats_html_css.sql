SELECT competency_name, count(competency_name) FROM html_css_status
JOIN html_css_competencies on(html_css_competencies.id = html_css_status.comp_id)
JOIN students on (students.id = html_css_status.student_id)
WHERE passed = $1 AND cohort = $2
GROUP BY competency_name;