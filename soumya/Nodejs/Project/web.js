var express = require("express");
var parser = require("body-parser");
var routes = require("./config/routes");
var web = express();

web.use(parser());

web.set("view engine", "ejs");
web.use(express.static(__dirname + "/public"));
web.use(routes);

web.listen(3000, function() {
    console.log("Server running");
});