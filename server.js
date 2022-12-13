import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import ENVIRONMENT from "dotenv";
//const router = express.Router();
//import http from "http";
ENVIRONMENT.config();

const app = express();
const port = process.env.PORT || 3005;
app.use(bodyParser.json());

mongoose
  .connect(process.env.PROD_DB_URL)
  .then((response) => {
    //console.log("Connected to db ", response);
  })
  .catch((error) => {
    //console.log("Error in connected to db ", error);
  });

const persons = [
  {
    name: "sachin",
    age: 28,
  },
  {
    name: "sagar",
    age: 30,
  },
];

app.get("/persons", (req, res) => {
  const { name, age } = req.query;
  console.log(name, age);
  if (req.query.hasOwnProperty("age") || req.query.hasOwnProperty("name")) {
    res.send(persons.filter((p) => p.name == name || p.age == age));
  } else {
    res.send(persons);
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

// http.createServer(app).listen(port, () => {
//   console.log("Server started on PORT : ", port);
// });

app.listen(port, () => {
  console.log("Server started on PORT : ", port);
});
