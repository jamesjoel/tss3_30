var express = require("express");
var Router = express.Router();

Router.use("/",require("../controller/home"));

module.exports = Router;