var express = require("express");
var routes = express.Router();
var Product = require("../../models/product");
var mongodb = require("mongodb");

routes.get("/:id",function(req,res){
    // console.log(req.params);
    var id = req.params.id;
Product.check({_id: mongodb.ObjectId(id)},function(err,result){

    var pagedata = {
        pagename: "MoreInfo/index",
        title: "More Info",
        product: result[0]
    }
    res.render("layout",pagedata);
});
});

routes.get("/buynow",function(req,res){
    var pagedata = {
        pagename: "MoreInfo/congrats",
        title: "Successfully"
    }
    res.render("layout",pagedata);
});


module.exports = routes;