var express = require("express");
var app = express();

var n=1;



app.get("/", function(req, res){
    res.sendFile(__dirname+"/home.html");
});
app.get("/about", function(req, res){
    res.sendFile(__dirname+"/about.html");
});
app.get("/contact", function(req, res){
    res.sendFile(__dirname+"/contactus.html");
});
app.get("/hello", function(req ,res){
    // res.send("hello");
    console.log(n);
    res.redirect("http://google.com");
    n++;
});




app.listen(3000, function(){
    
    console.log("server running");
});