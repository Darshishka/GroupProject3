# Favorly
![node](https://img.shields.io/node/v/express) ![npm](https://img.shields.io/npm/v/express) ![reactjs](https://img.shields.io/badge/ReactJS-v16.12.0-green) ![react-redux](https://img.shields.io/badge/react--redux-v7.1.3-green)

## Overview
This full stack ReactJS neighborhood app uses Redux for state management, Sequelize/mySQL as a database, as well as Express and Node.js for the backend. It allows users to post favors and offers, comment on them, and upload photos. Features password salting + hashing and inclusive design.

## Technologies and Dependencies
- JavaScript
- ReactJS
- Redux and React-Redux
- Bootstrap and React-Bootstrap
- Sequelize (mySQL)
- Node.js and Express
- User authentication and validation
- Bcrypt

## Key Features

* Clean, ES6 JavaScript code
* Express and express.Router() to handle server routes
* ReactJS UI 
* State management using Redux
* User authentication with JWT and local storage for persistance 
* Bcrypt for password salting and hashing
* Restricted routes in ReactJS using react-router-dom

* Creating a new user

add gif later

* Logging in and out

add gif later

* Posting and commenting

add gif later

## Getting Started

To download and test this app, you will need the Node Package Manager installed.  For more information, visit: <https://www.npmjs.com/get-npm>

You will also need Node.js installed.  For more information, visit <https://nodejs.org/en/download/>

### Installing

To install, access the Github page <https://github.com/Darshishka/GroupProject3>.  You may fork the repository and then clone it to your computer.  

Next, you will need to download the required NPM packages, on both the client and root foolders. Because these packages are listed as dependencies already in the package.json file, you may install these packages by typing `npm install` on the command line. 

This app uses MySQL and Sequelize. You will need to set up your remote database by uploading the information in the `schema.sql` file located in the models folder. You'll need to create a .env file in the root folder and add DB_PASS=YOURMYSQLPASSWORD.

If you wish, you can download the redux dev tool extension [here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) . This line of code in index.js in client allows you to view states as the change from the developer console. 

``` 
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

```

## Deployment and General Use
This app can be deployed to a server, such as Heroku or AWS, for online use from different users in different locations. To store data input, you will need to utilize an online database, such as the JAWSDB_URL add-on offered by Heroku.

It is currently deployed through heroku. To make changes to the live document, you will need to get access to the heroku app. After cloning the repo from github

``` 
git clone git@github.com:Darshishka/GroupProject3.git

```
and making desired changes, you'll need to add the heroku app remotely

```
git remote add heroku git@heroku.com:ADDPAGE.git

```
then you can git add, commit, and push to heroku master.

## Authors

* Authors: [Stephanie Lake](https://github.com/sjconst), [Darcy Atlas](https://github.com/Darshishka), [Bill Coury](https://github.com/billcoury), [Whitney Tarkington](https://github.com/whittark)
* Change address later --- See deployed on [Heroku](https://www.heroku.com/)

## License

![MIT](https://img.shields.io/bower/l/bootstrap)