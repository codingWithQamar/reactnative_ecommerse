const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const port = 8000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongodb+srv://qamaralizaine786:<password>@cluster0.zmczenl.mongodb.net/

mongoose
  .connect(
    "mongodb+srv://qamaralizaine786:nRaxGkWQVeDpYEWg@cluster0.zmczenl.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error Connecting to MongoDB", err);
  });
app.listen(port, () => {
  console.log("Server is running on port 8000");
});
