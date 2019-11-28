var express = require("express");
var inox = express();

var routes = require("./config/routes");
inox.use(routes);

inox.set("view engine","ejs");

inox.use(express.static(__dirname+"/public"));

inox.listen(3000,function(){
    console.log("server running");
});






 


