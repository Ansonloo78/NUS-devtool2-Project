DROP TABLE IF EXISTS account;
CREATE TABLE account(
    account_id    INTEGER  NOT NULL PRIMARY KEY AUTO_INCREMENT
    ,user_id      INTEGER  NOT NULL
    ,account_no   VARCHAR(20) NOT NULL
    ,account_type VARCHAR(10) NOT NULL
    ,a_balance    NUMERIC(7,2) NOT NULL
    ,ccard_id     INTEGER  NOT NULL
    ,c_balance    NUMERIC(7,2) NOT NULL
);

