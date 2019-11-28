var express = require("express");
var routes = express.Router();


routes.use("/", require("../controller/home"));
routes.use("/about", require("../controller/about"));
routes.use("/signup", require("../controller/signup"));
routes.use("/login", require("../controller/login"));
routes.use("/OfferAndSales", require("../controller/offer"));




module.exports=routes;