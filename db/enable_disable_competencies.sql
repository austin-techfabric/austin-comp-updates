UPDATE competencies
SET active = $1
WHERE id = $2;
SELECT * FROM competencies
ORDER BY id;