CREATE DATABASE digitalp;

CREATE TABLE users(
    user_name text NOT NULL UNIQUE,
    user_password text NOT NULL
);

INSERT INTO users(user_name, user_password) VALUES ('rider231', 'berserker049');