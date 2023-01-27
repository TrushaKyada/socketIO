const cors = require("cors");
const env = require('dotenv').config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const db = require("./web-socket/db/conn");
const express = require("express");
const { urlencoded } = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))
app.use(cookieParser())
module.exports = app