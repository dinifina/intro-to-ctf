CREATE DATABASE sqlvulndb;

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_address VARCHAR(255)
);

-- insert fake people

INSERT INTO users(user_name, user_password, user_address) VALUES
('jason', 'k25sal', '200 George St'),
('administrator', 'z942ja', '123 Haymarket'),
('dini', 'znfw234', 'yo mama house idk');