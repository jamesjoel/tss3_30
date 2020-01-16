
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var caches = require("nocache");
var fUpload = require("express-fileupload");
// var random = require("randomstring");
//var sha1 = require("sha1");


var routes = require("./config/routes");

var Category = require("./models/category");

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));

app.use(bodyParser());
app.use(cookieParser());
app.use(session({secret: "user"}));
app.use(caches());
app.use(flash());
app.use(fUpload());
// app.use(random());





app.use(function(req, res, next){
    // console.log(typeof(res.locals));

    Category.search({}, function(err, result){

        res.locals.logo="Flipkart.com";
        res.locals.session = req.session;
        res.locals.allCategory = result;
        if(req.cookies.cart)
        {
            var ids = req.cookies.cart;
            var arr = ids.split("#");
            res.locals.totalItem=arr.length;
        }
        else
        {
            res.locals.totalItem=0;
        }

        next();
    });

    
});



app.use(routes);



app.listen(3000, function(){
    console.log("server is running");
});