var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

app.get("/", function(req, res){
    var pagedata = { pagename : "home/index", title : "Home" };
    res.render("layout", pagedata);
});

app.get("/about", function (req, res) {
    var pagedata = { pagename: "about/index", title : "About" };
    res.render("layout", pagedata);
});
app.get("/contact", function (req, res) {
    var pagedata = { pagename: "contact/index", title : "Contact" };
    res.render("layout", pagedata);
});




app.listen(3000, function(){
    console.log("server running");
});