var express = require("express");
var routes = express.Router();

routes.get("/", function (req, res) {
    var pagedata = { pagename: "profile/index", title : "Profile" };
    res.render("layout", pagedata);
});

module.exports=routes;