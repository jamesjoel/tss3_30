var express = require("express");
var routes = express.Router();
var database = require("../../config/database");
var MongoClient = require("mongodb").MongoClient;

routes.get("/", function(req, res) {
    var pagedata = {
        pagename: "admin/product/index",
        title: "Products"

    }
    routes.post("/", function(req, res) {
        console.log(req.body);
        req.body.product_price = parseInt(req.body.product_price);
        req.body.product_discount = parseInt(req.body.product_discount);
        MongoClient.connect(database.dbUrl, function(err, client) {

            if (err) {
                console.log(err);
            }
            var db = client.db(database.dbName);
            db.collection("product").insert(req.body, function(err, client) {
                if (err) {
                    console.log(err);
                }
                res.redirect("/admin/product");
            });
        });
    });
    res.render("admin_layout", pagedata);
});


module.exports = routes;