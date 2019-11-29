var express = require("express");
var routes = express.Router();

routes.get("/", function(req, res){
    var pagedata = { title : "Admin Login", pagename : "admin/login/index"};
    res.render("admin_layout", pagedata);
});




module.exports = routes;