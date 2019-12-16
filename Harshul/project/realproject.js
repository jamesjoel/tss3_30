var express = require("express");
var inox = express();
var parser = require("body-parser");
var cookieparser = require("cookie-parser");
var session = require("express-session")
var flash = require("express-flash");
var cache = require("nocache");


var routes = require("./config/routes");
var categories = require("./models/categories");




inox.set("view engine", "ejs");
inox.use(express.static(__dirname + "/public"));
inox.use(parser());
inox.use(cookieparser());
inox.use(session({ secret: "Project 123 " }));
inox.use(flash());
inox.use(cache());

inox.use(function (req, res, next) {
    categories.search({}, function (err, result) {
        res.locals.logo = "Fashion central";
        res.locals.session = req.session;
        res.locals.allcategories = result;
        next();
    });
});





inox.use(routes);

inox.listen(3000, function () {
    console.log("server running");
});









