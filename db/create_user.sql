INSERT INTO users (name, password, position, email) VALUES ($1, $2, $3, $4);
SELECT name, position, email FROM users WHERE email = $4;