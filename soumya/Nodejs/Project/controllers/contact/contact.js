var express = require("express");
var web = express();
var routes = express.Router();


routes.get("/", function(req, res) {
    var pagedata = {
        pagename: "contact/index",
        title: "Contact Page",
    }
    res.render("layout", pagedata);
});

module.exports = routes;