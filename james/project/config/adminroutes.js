var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/admin/login"));
routes.use("/product", require("../controllers/admin/product"));




module.exports = routes;