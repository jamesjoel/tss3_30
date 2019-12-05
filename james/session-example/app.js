var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");


app.set("view engine", "ejs");

app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS3"}));

app.get("/", function(req, res){
    req.session.name="rohit";
    res.render("home");
});
app.get("/show", function (req, res) {
    var a = req.session.name;

    res.render("show", { a : a });
});





app.listen(3000, function(){
    console.log("server running");
});