var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./config/routes");
var web = express();
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var cache = require("nocache");
var Category = require("./models/category");
var upload = require("express-fileupload");
var MongoClient = require("mongodb").MongoClient;
// var Product = require("./models/product");
// d033e22ae348aeb5660fc2140aec35850c4da997
web.set("view engine", "ejs");
web.use(express.static(__dirname + "/public"));

web.use(bodyParser());
web.use(cookieParser());
web.use(session({ secret: "soumya3000" }));
web.use(flash());
web.use(cache());
web.use(upload());

web.use(function(req, res, returns) {
    Category.check({}, function(err, result) {

        res.locals.logo = "ShoppingMall.com";
        res.locals.session = req.session;
        res.locals.allcategory = result;
        // res.locals.allcategory = [];
        if(req.cookies.cart){
            var ids = req.cookies.cart;
            var arr = ids.split("#");
            res.locals.totalitem = arr.length;
        }else{
            res.locals.totalitem = 0;
        }
        returns();
    });
});

// MongoClient.connect("mongodb://soumya:soumya123@ds215910.mlab.com:15910/practice", function(err, client){
//     var db = client.db("practice");

//     db.collection("admin").find().toArray(function(err, result){
//         console.log(result);
//     });
// });


web.use(routes);

var port = process.env.PORT || 3000; 

web.listen(port, function() {
    console.log("Server running");
});