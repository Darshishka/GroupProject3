const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const db = require("./models");
// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Use routes
const routes = require("./routes/routes");
app.use(routes);
//Error handler
app.use((err, req, res, next) => {
  console.log(`There is an error, and it is ${err}`); 
  res.sendStatus(500);
});
// Syncing sequelize models and then starting Express app
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});