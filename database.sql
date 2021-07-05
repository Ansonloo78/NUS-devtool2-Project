-- add account details
insert into account (user_id,account_id,ccard_id,account_no,account_type,a_balance,c_balance)
values (1,1,1,'6667777788','current','555.69','100');
insert into account (user_id,account_id,ccard_id,account_no,account_type,a_balance,c_balance)
values (2,2,2,'7778888899','current','6391.85','20000');
insert into account (user_id,account_id,ccard_id,account_no,account_type,a_balance,c_balance)
values (3,3,3,'8889999900','current','22228.7','300');
insert into account (user_id,account_id,ccard_id,account_no,account_type,a_balance,c_balance)
values (4,4,4,'9990000011','current','9999.11','9999.11');
insert into account (user_id,account_id,ccard_id,account_no,account_type,a_balance,c_balance)
values (5,5,5,'5551111122','current','200.4','100');

-- add user details
insert into user (user_id,nric,first_name,last_name,email,mobile,password)
values (1,'s1234567z','jack','tan','random_user@gmail.com','81234567','$aB123456');
insert into user (user_id,nric,first_name,last_name,email,mobile,password)
values (2,'s1234566x','jackson','lim','random_user1@gmail.com','89876543','$aB123455');
insert into user (user_id,nric,first_name,last_name,email,mobile,password)
values (3,'s1234568a','jacky','lee','random_user2@gmail.com','88888888','$aB123454');
insert into user (user_id,nric,first_name,last_name,email,mobile,password)
values (4,'s1234563s','john','ng','random_user3@gmail.com','99999999','$aB123453');
insert into user (user_id,nric,first_name,last_name,email,mobile,password)
values (5,'s1234564e','johnson','toh','random_user4@gmail.com','98765432','$aB123452');

-- add transaction history
insert into transaction (trans_id,account_id,trans_amount)
values (1,2,'300');
insert into transaction (trans_id,account_id,trans_amount)
values (2,2,'300');