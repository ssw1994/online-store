import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import ENVIRONMENT from "dotenv";

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

app.listen(port, () => {
  console.log("Server started on PORT : ", port);
});
