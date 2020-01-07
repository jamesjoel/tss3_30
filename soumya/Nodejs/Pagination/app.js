var express = require("express");
var app = express();
var BodyParser = require("body-parser");
var routes = require("./config/routes");







app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(BodyParser());

app.use(routes);

app.listen(3000,function(req,res){
    console.log("Your Server Running");
});