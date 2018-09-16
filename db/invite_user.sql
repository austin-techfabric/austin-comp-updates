INSERT INTO invited_staff_list (position, email, registered) VALUES ($1, $2, false);
SELECT * FROM invited_staff_list
WHERE registered = false;