UPDATE assessments_status
SET notes = $1
WHERE assess_id = $2 AND student_id = $3;

SELECT students.*, assessments.assessment_name, assessments_status.assess_id, assessments_status.passed, assessments_status.notes FROM students
JOIN assessments_status on(assessments_status.student_id = students.id)
JOIN assessments on(assessments.id = assessments_status.assess_id)
WHERE students.id = $3
ORDER BY assessments.id;