var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// var cookieParser = require("cookie-parser");


var routes = require("./config/routes");


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());

// app.use(session({ secret : "TSS3" }));
// app.use(flash());


app.use(routes);

app.listen(4000, function(){
    console.log("server running");
});
