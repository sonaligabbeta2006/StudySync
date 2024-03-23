const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/users");



const app = express();

const db=require("./config/keys").mongoURI;



mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


  const port = process.env.PORT || 2500;

  app.listen(port, () => console.log(`Server running on Port ${port}`));
