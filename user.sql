DROP TABLE IF EXISTS user;
CREATE TABLE user(
    user_id     INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT
    ,nric       VARCHAR(10) NOT NULL 
    ,first_name VARCHAR(9) NOT NULL
    ,last_name  VARCHAR(11) NOT NULL
    ,email      VARCHAR(34) NOT NULL
    ,mobile     VARCHAR(8) NOT NULL
    ,password   VARCHAR(20) NOT NULL
);
