INSERT INTO users (sub, name, position, email, assigned_cohort) VALUES ($1, $2, $3, $4, $5);
UPDATE invited_staff_list
SET registered = true
WHERE email = $4;
SELECT * FROM users WHERE email = $4;