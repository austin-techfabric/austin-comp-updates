SELECT DISTINCT assessments_status.assess_id, assessments.assessment_name FROM students
JOIN assessments_status on(assessments_status.student_id = students.id)
JOIN assessments on(assessments.id = assessments_status.assess_id)
WHERE students.cohort = $1
ORDER BY assessments_status.assess_id;
