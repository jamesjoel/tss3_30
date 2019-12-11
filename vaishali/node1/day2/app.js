var express = require("express");
var app = express();

app.get("/" , function(req, res){
    res.sendfile(__dirname+"/home.html");
});

app.get("/about" , function(req, res){
    res.sendfile(__dirname+"/about.html");
});

app.get("/contact" ,function(req, res){
    res.sendfile(__dirname+"/contact.html");
});




app.listen(3000, function(){
    
    console.log("server running");

});