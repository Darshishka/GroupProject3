const express = require("express");
const path = require("path");
const { User, Post, Comment } = require("../models");
const fs = require("fs");
//bcrypt for password hashing
const bcrypt = require("bcryptjs");
//create JWT payload and sign with keys
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// Initialize Express
const app = express();
//Multer to process image data
const multer = require('multer');
const upload = multer({ dest: 'public/images/uploads/' });
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
            email: email
        }
    })
    .then(data => {      
        if(data){
            bcrypt.compare(password, data.password).then(
                isMatch => {
                    if(isMatch){
                        const payload = {
                            id: data.id,
                            email: data.email
                          };
                          jwt.sign(payload, keys.secretOrKey, {
                            expiresIn: 31556926 // 1 year in seconds
                          }, 
                          (err, token) => {
                              res.json({
                                  success: true,
                                  token: `Bearer ${token}`,
                                  firstName: data.firstName,
                                  lastName: data.lastName
                              });
                          }
                        );
                    } else {
                        res.json("password incorrect")
                    }
                });          
        } else {
            res.json("user not found")
        } 
    })
    .catch(err => res.json(err))
});
app.post("/api/register", (req, res) => { 
    let { firstName, lastName, email, password, cross, refer } = req.body;
    User.findAll({
        where: {
            email: email
        }
    })
    .then(data => {
        if(data.length){
            return res.json({ email: "email exists"})
        } else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) throw err;
                    password = hash;
                    User.create({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password,
                        crossStreet: cross,
                        referral: refer
                    })
                    .then(data => res.json(data))
                    .catch(err => res.status(422).json(err))
                })
            })            
        }
    })
    .catch(err => res.json(err))
});
app.post("/api/post/:email", upload.single('file'), (req, res) => {
    let email = req.params.email;        
    let { type, category, title, message } = req.body;  
    let imageData;  
    if(req.file){
        imageData = fs.readFileSync(req.file.path);
    }    
    Post.create({
        title: title,
        message: message,
        type: type,
        category: category,
        UserEmail: email,
        image: imageData
    })
    .then(data => res.json(data))
    .catch(err => {
        console.log(`this is the error: ${err} ${err.field}`);
        res.json(err)
    })
});
app.post("/api/comment/:email/:id", (req, res) => {
    let email = req.params.email;
    let message = req.body.message;
    let id = req.params.id;
    Comment.create({
        message: message,
        UserEmail: email,
        PostId: id
    })
    .then(data => res.json(data))
    .catch(err => res.json(err))
});
app.get("/api/all", (req, res) => {
    Post.findAll({
        include: [{model: Comment, include: [User]}, User]
      }).then(data => res.json(data))
    .catch(err => res.json(err))
});
app.get("/api/posts/category/:category", (req, res) => {
    let category = req.params.category;  
    Post.findAll({
        where: {
            category: category
        },
        include: [{model: Comment, include: [User]}, User]
    }).then(data => res.json(data))
    .catch(err => res.json(err))
});
app.get("/api/posts/type/:type", (req, res) => {
    let type = req.params.type;
    Post.findAll({
        where: {
            type: type
        },
        include: [{model: Comment, include: [User]}, User]
    }).then(data => res.json(data))
    .catch(err => res.json(err))
});
app.get("/api/activity/email/:email", (req, res) => {
    let email = req.params.email;
    User.findAll({
        where: {
            email: email
        },
        include: [Comment, Post]
    }).then(data => res.json(data))
    .catch(err => res.json(err))
});
app.put("/api/posts/like/:id", (req,res) => {
    let id = req.params.id;
    Post.update({
        likes: parseInt(req.body.likes)},{
        where: {
            id: id
        }
    }).then(data => res.json(data))
    .catch(err => res.json(err))
});
app.put("/api/comment/like/:id", (req,res) => {
    let id = req.params.id;
    Comment.update({
        likes: parseInt(req.body.likes)},{
        where: {
            id: id
        }
    }).then(data => res.json(data))
    .catch(err => res.json(err))
});
app.delete("/api/posts/delete/:id", (req, res) => {
    let id = req.params.id;
    Post.destroy({
        where: {
            id: id
        }
    })
    .then(data=> res.json(data))
    .catch(err =>  res.json(err))
});
app.delete("/api/comment/delete/:id", (req, res) => {
    let id = req.params.id;
    Comment.destroy({
        where: {
            id: id
        }
    })
    .then(data=> res.json(data))
    .catch(err =>  res.json(err))
});
app.get("/*", (req, res) => {   
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = app;