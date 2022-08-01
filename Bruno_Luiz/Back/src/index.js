const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
let cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./app/controllers/index")(app);

app.listen(process.env.PORT || 3000);
