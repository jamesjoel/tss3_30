var express = require("express");
var web = express();
var routes = express.Router();

routes.get("/", function(req, res) {
    var pagedata = {
        pagename: "help/index",
        title: "Help Page",
    }
    res.render("layout", pagedata);
});


module.exports = routes;