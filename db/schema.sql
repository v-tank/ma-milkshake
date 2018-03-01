-- CREATE DATABASE milkshake_db;
USE milkshake_db;

CREATE TABLE milkshakes (
  id INT NOT NULL AUTO_INCREMENT,
  milkshake_name VARCHAR(100) NOT NULL,
  gulped BOOLEAN DEFAULT FALSE,
  date TIMESTAMP NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
)