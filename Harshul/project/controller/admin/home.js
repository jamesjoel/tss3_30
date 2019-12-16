var express = require("express");
var routes = express.Router();

routes.get("/",function(req,res){
    var pagedata ={ title:"Admin home", pagename:"admin/home/index"};
    res.render("admin_layout",pagedata);    
});

module.exports = routes;