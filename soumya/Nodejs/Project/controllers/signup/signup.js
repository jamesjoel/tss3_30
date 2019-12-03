var express = require("express");
var routes = express.Router();
var sha1 = require("sha1");
var MongoClient = require("mongodb").MongoClient;

var database = require("../../config/database");

routes.get("/", function(req, res) {
    var pagedata = {
        pagename: "signup/index",
        title: "Signup",
    }
    res.render("layout", pagedata);
});

routes.post("/", function(req, res) {
    req.body.password = sha1(req.body.password);
    MongoClient.connect(database.dbUrl, function(err, client) {
        if (err) {
            console.log(err);
            return;
        }
        var db = client.db(database.dbName);
        db.collection("user").insert(req.body, function(err, client) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(client);
            res.redirect("/login#login");

        });
    });
});


module.exports = routes;