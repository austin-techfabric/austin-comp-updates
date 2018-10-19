UPDATE assessments
SET active = $1
WHERE id = $2;
SELECT * FROM assessments
ORDER BY id;