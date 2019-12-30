var express = require("express");
var routes = express.Router();
var user = require("../../models/user");
var mongodb = require("mongodb");


routes.get("/",function(req,res){
    user.search({},function(err,result){
    

        var pagedata ={ pagename:"admin/users/index",user:result ,title:" All Users"};
        res.render("admin_layout",pagedata);
    });
});

routes.get("/:id/:status",function(req,res){
    console.log(req.params);
    var id = req.params.id;
    if(req.params.status==1){
        var status = 0;

    }
    else{
        var status = 1;
    }

    user.update({_id: mongodb.ObjectId(id)},{status:status},function(err, result){
        res.redirect("/admin/users");
    });

});
module.exports=routes;