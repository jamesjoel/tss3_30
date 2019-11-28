var express = require("express");
var parser = require("body-parser");
var routes = require("./config/routes");
var web = express();
web.use(parser());
web.use(routes);

web.set("view engine", "ejs");
web.use(express.static(__dirname + "/public"));

web.listen(3000, function() {
    console.log("Server running");
});