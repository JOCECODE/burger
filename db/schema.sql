CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT,
    burger_name VARCHAR
    (30) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY
    (id)
);

