var express = require("express");
var web = express();
var routes = express.Router();

routes.get("/", function(req, res) {
    var pagedata = {
        pagename: "about/index",
        title: "About Us",
    }
    res.render("layout", pagedata);
});

module.exports = routes;