import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import ENVIRONMENT, { parse } from "dotenv";

ENVIRONMENT.config();

const app = express();
const port = process.env.PORT || 3005;
app.use(bodyParser.json());

app.post("/add", (req, res) => {
  const { data } = req.body;
  console.log(data);
  res.send("Received Data");
});

// mongoose
//   .connect(process.env.PROD_DB_URL)
//   .then((response) => {
//     //console.log("Connected to db ", response);
//   })
//   .catch((error) => {
//     //console.log("Error in connected to db ", error);
//   });

const add = ({ arg1, arg2 }) => parseInt(arg1) + parseInt(arg2);

app.get("/add", (req, res) => {
  console.log(req.query);
  const obj = req.query;
  if (!obj.arg1) {
    res.send("<h1>Please Provide arguments<h1>");
  } else {
    res.send(`<h1>${add(req.query)}</h1>`);
  }
});

const list = [
  {
    name: "sachin",
    age: 27,
    location: "mumbai",
  },
  {
    name: "sagar",
    age: 29,
    location: "Pune",
  },
  {
    name: "shubham",
    age: 27,
    location: "Georai",
  },
];

app.get("/list", (req, res) => {
  const { location, age, name } = req.query;
  console.log(location, age, name);
  let result = list;
  if (age) {
    result = result.filter((item) => item.age >= age);
  }
  if (location) {
    result = result.filter((item) => item.location == location);
  }

  if (name) {
    result = result.filter((item) => item.name == name);
  }
  res.send(result).json();
});

app.get("/", (req, res) => {
  res.send("Server running" + port);
});

app.listen(port, () => {
  console.log("Server started on PORT : ", port);
});
