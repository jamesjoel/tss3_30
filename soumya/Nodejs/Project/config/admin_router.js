var express = require("express");
var routes = express.Router();

routes.use("/product", require("../controllers/admin/product"));
routes.use("/", require("../controllers/admin/login"));
module.exports = routes;