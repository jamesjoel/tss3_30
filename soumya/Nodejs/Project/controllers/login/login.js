var express = require("express");
var routes = express.Router();

routes.get("/", function(req, res) {
    var pagedata = {
        pagename: "login/index",
        title: "Login Page",
    }
    res.render("layout", pagedata);
});



module.exports = routes;