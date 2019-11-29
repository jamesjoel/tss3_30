var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/admin/login"));




module.exports = routes;