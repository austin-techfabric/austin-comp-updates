UPDATE assessments_status 
SET passed = $2
WHERE student_id = $1 AND assess_id = $3;

SELECT students.*, assessments.assessment_name, assessments_status.assess_id, assessments_status.passed FROM students
JOIN assessments_status on(assessments_status.student_id = students.id)
JOIN assessments on(assessments.id = assessments_status.assess_id)
WHERE students.id = $1
ORDER BY assessments.id;