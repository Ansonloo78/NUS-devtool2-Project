DROP TABLE IF EXISTS transaction;
CREATE TABLE transaction(
    trans_id      INTEGER  NOT NULL PRIMARY KEY AUTO_INCREMENT
    ,account_id   INTEGER  NOT NULL
    ,trans_amount NUMERIC(7,2) NOT NULL
);