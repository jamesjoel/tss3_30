var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var Product = require("../../models/product");

routes.get("/add/:id",function(req,res){
    var id = req.params.id;
    if(req.cookies.cart){
        var oldids = req.cookies.cart;
        var newids = oldids+"#"+id;
        res.cookie("cart",newids,{maxAge: 1000 * 60 * 60 * 2, httpOnly: true });
    }else{
        res.cookie("cart",id, { maxAge: 2 * 60 * 60 * 1000, httpOnly: true } );
    }
    res.redirect("/");
});

routes.get("/mycart",function(req,res){
   
    var ids = req.cookies.cart;
    var arr = ids.split("#");  
    var where_arr = [];
    arr.forEach(function(x){
        where_arr.push({_id : mongodb.ObjectId(x)});
    }); 
    Product.check({$or : where_arr }, function(err,result){
        // console.log(result);
        var pagedata = {
            pagename: "cart/index",
            title: "My Cart",
            result : result
        }
        res.render("layout",pagedata);
    });
});

routes.get("/clear",function(req,res){
    res.clearCookie("cart");
    res.redirect("/");
});
module.exports=routes;
