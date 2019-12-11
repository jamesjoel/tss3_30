var express = require("express");
var web = express();
var routes = express.Router();

routes.get("/", function(req, res) {
    var pagedata = {
        pagename: "profile/index",
        title: "My Profile",
    }
    res.render("layout", pagedata);
});

module.exports = routes;