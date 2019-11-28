var express = require("express");
var app = express();
var bodyParser = require("body-parser");


var routes = require("./config/routes");


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());



app.use(routes);

app.listen(3000, function(){
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
