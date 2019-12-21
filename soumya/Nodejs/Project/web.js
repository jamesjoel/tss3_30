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



web.use(routes);

web.listen(3000, function() {
    console.log("Server running");
});