var express = require("express");
var app = express();



app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

// var n=0;
// var arr = ["/about", "/", "/contact"];
// app.use(arr, function(req, res, next){
//     n++;
//     console.log("Total : ",n);
//     // console.log(req.url);
//     // console.log(req.originalUrl);
//     next();
// });

app.get("/", function(req, res){
    var pagedata = { pagename : "home/index", title : "Home" };
    res.render("layout", pagedata);
});

app.get("/about", function (req, res) {
    var pagedata = { pagename: "about/index", title : "About" };
    res.render("layout", pagedata);
});
app.get("/login", function (req, res) {
    var pagedata = { pagename: "login/index", title: "Login" };
    res.render("layout", pagedata);
});
app.get("/signup", function (req, res) {
    var pagedata = { pagename: "signup/index", title: "Signup" };
    res.render("layout", pagedata);
});




app.get("/contact", function (req, res) {
    var pagedata = { pagename: "contact/index", title : "Contact" };
    res.render("layout", pagedata);
});
app.listen(3000, function(){
    console.log("server running");
});