--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists tasks;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE tasks (
    id INT NOT NULL AUTO_INCREMENT, 
    task VARCHAR(200) not null, 
    isDone BOOLEAN not null, 
    PRIMARY KEY (id)
    );

INSERT INTO tasks (
    task, 
    isDone
) VALUES (
    'send email',
    0
), ( 'call back Mom',
     1
), (
    'pickup package',
    1
);