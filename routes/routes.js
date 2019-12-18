const express = require("express");
const path = require("path");
//const { UserDetails } = require("../models");
// Initialize Express
const app = express();
//Routes
app.get("/api", (req, res) => {
    //Fill in later
})
app.get("/*", (req, res) => {   
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = app;