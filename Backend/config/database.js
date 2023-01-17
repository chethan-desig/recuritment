const mongoose = require("mongoose");

const configureDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/create")
    .then(() => {
      console.log("db is connected");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = configureDB;
