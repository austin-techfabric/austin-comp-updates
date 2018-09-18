SELECT DISTINCT assessments_status.assess_id, assessments.assessment_name FROM students
JOIN assessments_status on(assessments_status.student_id = students.id)
JOIN assessments on(assessments.id = assessments_status.assess_id)
WHERE students.cohort = $1
ORDER BY assessments_status.assess_id;

-- this one is to fix the label for the graph when switching between cohorts\
-- currently the labels go by what is active