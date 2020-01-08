var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);


var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var cache = require("nocache");
var upload = require("express-fileupload");
// var sha1 = require("sha1");


var routes = require("./config/routes");

var Category = require("./models/category");



app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());

app.use(cookieParser());
app.use(session({ secret : "TSS3" }));
app.use(flash());
app.use(cache());
app.use(upload());


app.use(function(req, res, next){
    
    req.io=io;
    
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




// req.session




app.use(routes);
server.listen(3000, function(){
    console.log("server running");
});











// var n=0;
// var arr = ["/about", "/", "/contact"];
// app.use(arr, function(req, res, next){
//     n++;
//     console.log("Total : ",n);
//     // console.log(req.url);
//     // console.log(req.originalUrl);
//     next();
// });
