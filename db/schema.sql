-- CREATE DATABASE milkshake_db;
USE nnxor34mj5tykc7h; -- database created by jawsDB 

-- Creates the table
CREATE TABLE milkshakes (
  id INT NOT NULL AUTO_INCREMENT,
  milkshake_name VARCHAR(100) NOT NULL,
  gulped BOOLEAN DEFAULT FALSE,
  date TIMESTAMP NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
)