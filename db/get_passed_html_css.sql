SELECT DISTINCT students.id, students.name, students.email, sum(passed::int) as competencies_passed FROM students
JOIN html_css_status on(html_css_status.student_id = students.id)
WHERE students.cohort = $1 AND students.active = true
GROUP BY students.id;