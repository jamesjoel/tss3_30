var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var cookieparser = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var cache = require("nocache");
// var sha1 = require("sha1");

var routes = require("./config/routes");

var Category = require("./models/category");

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyparser());
app.use(cookieparser());
app.use(session({secret: "cantypemsghere"}));
app.use(flash());
app.use(cache());

app.use(function(req, res, next){
    // console.log(typeof(res.locals));
    
    Category.search({}, function(err, result){
        
        res.locals.logo="v-shop.com";
        res.locals.session= req.session ;
        res.locals.allCategory = result;
        next();
    });
    
});


app.use(routes);



app.listen(3000, function(){
    console.log("Server Running");
});