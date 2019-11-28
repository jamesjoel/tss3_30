var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/home/home"));
routes.use("/about", require("../controllers/about/about"));
routes.use("/contact", require("../controllers/contact/contact"));
routes.use("/help", require("../controllers/help/help"));
routes.use("/Signup", require("../controllers/signup/signup"));
routes.use("/login", require("../controllers/login/login"));
module.exports = routes;