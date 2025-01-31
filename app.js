const express = require("express");
const app = express();

// Middleware
const cors = require("cors");

// Middleware usage
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.status(200).send({ message: "My name is Kator Agashua." });
});

app.get("/katoragashua", (req, res) => {
    res.status(200).json({
        email: "katoragashua@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/katoragashua"    
    })
})

module.exports = app;
