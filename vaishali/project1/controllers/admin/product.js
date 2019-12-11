var express = require("express");
var routes = express.Router();

var product = require("../../models/product");

//var MongoClient = require("mongodb").MongoClient;0
//var database = require("../../config/database");

routes.get("/", function(req, res){
    var pagedata = {title: "Product", pagename:"admin/product/index"};
    res.render("admin_layout", pagedata);
});

routes.post("/", function(req, res){
    req.body.product_price = parseInt(req.body.product_price);
    req.body.product_discount = parseInt(req.body.product_discount);
    product.insert(req.body, function(err, result){
        console.log(result.ops[0]._id);

    //MongoClient.connect(database.dbUrl, function(err, client){
      //  var db = client.db(database.dbName);
        //db.collection("product").insert(req.body, function(err, result){
            res.redirect("/admin/product");
        });
    });

module.exports = routes;