var express = require("express");
var routes = express.Router();

routes.get("/", function(req, res) {
    pagedata = {pagename:"contact/index", title:"contact"};
    res.render("layout", pagedata);
});

module.exports = routes;