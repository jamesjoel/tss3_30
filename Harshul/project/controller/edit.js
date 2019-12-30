var express = require("express");
var routes = express.Router();
var user =require("../models/user");
var mongodb=require("mongodb");

routes.get("/", function (req, res) {
    var id = req.session._id;
    user.search({_id: mongodb.ObjectId(id)},function( err,result){
        var pagedata = { pagename: "profile/edit", title : "Profile" , user: result[0] };
        res.render("layout", pagedata);
    });
});

module.exports=routes;