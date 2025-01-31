const express = require("express");
const app = express();

// Middleware
const cors = require("cors");

// Middleware usage
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      `<h1>Welcome to my HNG Internship Stage 0 assignment Page.<br/>Click <a href="/katoragashua">here</a> to visit the assignment page. </h1>`
    );
});

app.get("/katoragashua", (req, res) => {
  res.status(200).json({
    email: "katoragashua@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/katoragashua/katoragashua_hngstage_0",
  });
});

module.exports = app;
