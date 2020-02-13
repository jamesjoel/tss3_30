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
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://james:james123@ds243295.mlab.com:43295/tss3", function(err, client){
    var db = client.db("tss3");

    db.collection("demo").find().toArray(function(err, result){
        console.log(result);
    });
});





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
        // res.locals.allCategory = [];
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

var port = process.env.PORT || 3000;

server.listen(port, function(){
    // console.log("------", process.env.PORT);


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
