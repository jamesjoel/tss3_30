var express = require("express");
// var web = express();
var routes = express.Router();


routes.get("/", function(req, res) {
    var pagedata = {
        pagename: "admin/login/index",
        title: "Admin Panel",
    }
    res.render("admin_layout", pagedata);
});

routes.post("/", function(req, res) {
    console.log(req.body);
    // var username = req.body.username;
    // var pass = req.body.password;
});

module.exports = routes;