SELECT assessments.id, assess_id, student_id, passed, notes, assessment_name, assessments.active, assessments_status.id as assessments_status_id, name, cohort, email FROM assessments_status
JOIN assessments on(assessments.id = assessments_status.assess_id)
JOIN students on (students.id = assessments_status.student_id)
WHERE cohort = $1;