const express = require("express");
const path = require("path");
const { User } = require("../models");
// Initialize Express
const app = express();
//Routes
app.get("/api/user/email/:email", (req, res) => {  
    let email = req.params.email;
    User.findAll({
        where: {
            email: email
        }
    })
    .then(data => res.json(data))
    .catch(err => res.json(err))
});
app.post("/api/authenticate", (req, res) => {
    let { password, email } = req.body;
    User.findOne({
        where: {
            password: password,
            email: email
        }
    })
    .then(data => {      
        if(data){
            return res.json(data)
        } else {
            return res.json("Invalid login")
        }
    })
    .catch(err => res.json(err))
})
app.post("/api/register", (req, res) => {
    console.log("registering");
    let { firstName, lastName, email, password, crossStreet, referral } = req.body;
    User.findAll({
        where: {
            email: email
        }
    })
    .then(data => {
        if(data.length){
            return res.json({ email: "email exists"})
        } else {
            User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                crossStreet: crossStreet,
                referral: referral
            })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
        }
    })
    .catch(err => res.json(err))
});
app.get("/*", (req, res) => {   
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = app;