var x = require("express");
var web = x();

web.get("/",function(req,res){
    res.sendFile(__dirname+"/home.html");
});

web.get("/home",function(req,res){
    res.sendFile(__dirname+"/home.html");
});

web.get("/About",function(req,res){
    res.sendFile(__dirname+"/about.html");
});

web.get("/Contact",function(req,res){
    res.sendFile(__dirname+"/contact.html");
});

web.listen("3000",function(){
    console.log("Server Running");
});