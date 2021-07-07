const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/user/all", (request, response) => {
    database.connection.query(`select *
                               from user`, (errors, results) => {
        if (errors) {
            console.log(errors);
            response.status(500).send("Internal Server Error");
        } else {
            response.status(200).send(results);
        }
    });
});

let getUserName = router.get("/user/by-uid", (request, response) => {
    if (request.query.id.length === 0 || isNaN(request.query.id)) {
        console.log(`Invalid ID received. ID: ${request.query.id}`);
        response.status(400).send("Invalid ID received.");
        return;
    }
    database.connection.query(
        `select *
         from user
         where user_id = ${request.query.id}`,
        (errors, results) => {
            if (errors) {
                console.log(errors);
                response.status(500).send("Internal Server Error");
            } else {
                response.status(200).send(results);
            }
        }
    );
});

router.put("/user/update/by-id", (request, response) => {
    database.connection.query(
      `update user set mobile = '${request.body.new_mobile}' where id = ${request.body.id}`,
      (error, result) => {
        if (error) {
          console.log(error);
          response.status(500).send("Some error occurred at the Backend.");
        } else {
          response.status(200).send("Updated successfully!");
        }
      }
    );
  });

  router.delete("/user/delete/by-id", (request, response) => {
    database.connection.query(
      `delete from user where user_id = ${request.query.id}`,
      (error, result) => {
        if (error) {
          console.log(error);
          response.status(500).send("Some error occurred at the Backend.");
        } else {
          response.status(200).send("Deleted successfully!");
        }
      }
    );
  });

  router.post("/user/add", (request, response) => {
    database.connection.query(
      `insert into user (nric, first_name, last_name, email, mobile, password) values ('${request.body.nric}', '${request.body.f_name}', '${request.body.l_name}', '${request.body.email}', '${request.body.mobile}', '${request.body.password}')`,
      (error, result) => {
        if (error) {
          console.log(error);
          response.status(500).send("Some error occurred at the Backend.");
        } else {
          response.status(200).send("New user created successfully!");
        }
      }
    );
  });

module.exports = {
    router,
};