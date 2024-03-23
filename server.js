const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");

const fileUpload = require("express-fileupload");

var cors = require("cors");

const app = express();

// Db Config
const db = require("./config/keys").mongoURI;

//Passport middileware
passport.use(passport.initialize());

//passport config will in
require("./config/passport")(passport);
app.use(fileUpload());
//Body Parser
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 1000000,
  })
);
app.use(bodyParser.json({ limit: "50mb", extended: true }));

//Connect to mongodb through mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

//Use routes
app.use(cors());
app.options("*", cors());
app.use(users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on Port ${port}`));
