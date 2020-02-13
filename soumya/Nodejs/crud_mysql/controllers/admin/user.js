var express = require("express");
var routes = express.Router();
var User = require("../../models/user");
var mongodb = require("mongodb");

routes.get("/", function(req, res) {
    User.check({}, function(err, result) {
        var pagedata = {
            pagename: "admin/user/index",
            title: "All Users",
            user: result
        }
        res.render("admin_layout", pagedata);
    });
});

routes.get("/change_status/:id/:status",function(req,res){
    var status = req.params.status;
    var id = req.params.id;
    if(status == 1){
        var status = req.params.status = 0;
    }else{
        var status = req.params.status = 1;
    }
    User.update({_id: mongodb.ObjectId(id)},{status: status},function(err){
        res.redirect("/admin/user");
    });
});
module.exports = routes;