const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "stock_royal",
});

connection.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Connected to the database");
  }
});

const port = 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
connection.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Connected to the database");
  }
});

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/users", (request, response) => {
  connection.query("SELECT * FROM utilisateurs", (error, data) => {
    if (error) {
      console.error(error);
      response.status(500).send("Error retrieving users");
    } else {
      response.send(data);
    }
  });
});

app.post("/users", (request, response) => {
  const { username, password } = request.body;
  connection.query(
    "INSERT INTO utilisateurs (username, password) VALUES (?, ?)",
    [username, password],
    (error) => {
      if (error) {
        console.error(error);
        response.status(500).send("Error creating user");
      } else {
        response.send("User created successfully");
      }
    }
  );
});

app.put("/users/:id", (request, response) => {
  const { id } = request.params;
  const { username, password } = request.body;
  connection.query(
    "UPDATE utilisateurs SET username = ?, password = ? WHERE id = ?",
    [username, password, id],
    (error) => {
      if (error) {
        console.error(error);
        response.status(500).send("Error updating user");
      } else {
        response.send("User updated successfully");
      }
    }
  );
});

app.delete("/users/:id", (request, response) => {
  const { id } = request.params;
  connection.query("DELETE FROM utilisateurs WHERE id = ?", [id], (error) => {
    if (error) {
      console.error(error);
      response.status(500).send("Error deleting user");
    } else {
      response.send("User deleted successfully");
    }
  });
});
