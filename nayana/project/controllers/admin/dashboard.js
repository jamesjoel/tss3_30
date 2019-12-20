var express = require("express");
var routes = express.Router();

routes.get("/", function(req,res){
    pagedata = {pagename : "admin/dashboard/index", title :"admin_dashboard"};
    res.render("admin_layout", pagedata);
});

module.exports = routes;