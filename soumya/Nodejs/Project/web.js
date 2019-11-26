var express = require("express");
var web = express();

var routes = require("./config/routes");
web.use(routes);

web.set("view engine", "ejs");
web.use(express.static(__dirname + "/public"));

web.listen(3000, function() {
    console.log("Server running");
});