var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));
/*
app.use() which can call before every time when any URL hit.

*/


app.get("/", function(req, res){
    var pagedata = { pagename : "index" };
    res.render("layout", pagedata);
});
app.get("/about", function (req, res) {
    var pagedata = { pagename: "about" };
    res.render("layout", pagedata);
});
app.get("/contact", function (req, res) {
    var pagedata = { pagename: "contact" };
    res.render("layout", pagedata);
});
app.get("/help", function (req, res) {
    var pagedata = { pagename: "help" };
    res.render("layout", pagedata);
});
app.get("/terms", function(req, res){
    var pagedata = { pagename: "terms" };
    res.render("layout", pagedata);
});


app.listen(3000, function(){
    console.log("Server Running");
});