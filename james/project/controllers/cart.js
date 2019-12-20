var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var Product = require("../models/product");

routes.get("/add/:id", function (req, res) {
    // console.log(req.params);
    var id = req.params.id; // 2
    // console.log(req.cookies);
    if(req.cookies.cart)
    {
        var oldid = req.cookies.cart;
        var newids = oldid+"#"+id;
        res.cookie("cart", newids, { maxAge: 2 * 60 * 60 * 1000, httpOnly: true });
    }
    else
    {
        res.cookie("cart", id, { maxAge: 2 * 60 * 60 * 1000, httpOnly: true });
    }
    res.redirect("/");

    // var pagedata = { pagename: "about/index", title : "About" };
    // res.render("layout", pagedata);
});

routes.get("/mycart", function(req, res){
    var ids = req.cookies.cart; // 7#4#12#8
    var arr = ids.split("#"); // [7, 4, 12, 8]
    var where_arr = [];
    arr.forEach(function(x){
        where_arr.push({ _id : mongodb.ObjectId(x) });
    });
    // console.log(where_arr);
    
    Product.search({ $or : where_arr }, function(err, result){
        // console.log(result);
        var pagedata = { pagename: "cart/index", title : "My Cart", result : result };
        res.render("layout", pagedata);

    });
});

routes.get("/clear", function(req, res){
    res.clearCookie("cart");
    res.redirect("/");
});
routes.get("/remove/:id", function(req, res){
    var id = req.params.id;
    // console.log(id);
    var ids = req.cookies.cart;
    var arr = ids.split("#");
    // console.log(arr);
    var i = arr.indexOf(id);
    // console.log(i);
    arr.splice(i, 1);
    var newids = arr.join("#");
    res.cookie("cart", newids, { maxAge: 2 * 60 * 60 * 1000, httpOnly: true });
    res.redirect("/cart/mycart");


})



module.exports=routes;