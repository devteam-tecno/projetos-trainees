const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:admin@oladev.h6ueg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conectamos ao MongoDB!");
  })
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

module.exports = mongoose;
