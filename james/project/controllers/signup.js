var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

var sha1 = require("sha1");

routes.get("/", function (req, res) {
    var pagedata = { pagename: "signup/index", title: "Signup" };
    res.render("layout", pagedata);
});
routes.post("/", function(req, res){
    // console.log(req.body);
    // var obj = { full_name : req.body.f_name, email : req.body.email};

    req.body.password = sha1(req.body.password);
    MongoClient.connect(url, function(err, client){
        if(err){
            console.log(err);
            return;
        }
        var db = client.db("tss3");
        db.collection("user").insert(req.body, function(err, result){
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
            res.redirect("/login");
        });

    });
});

module.exports=routes;