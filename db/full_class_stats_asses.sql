SELECT assessment_name, count(assessment_name) FROM assessments_status
JOIN assessments on(assessments.id = assessments_status.assess_id)
JOIN students on (students.id = assessments_status.student_id)
WHERE passed = $1 AND cohort = $2
GROUP BY assessment_name;