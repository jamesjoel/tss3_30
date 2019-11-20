var a=require("express");
var y=a();
y.get("/",function(request,response){
    response.sendfile (__dirname+"/p.html");

});
y.get("/About",function(request,response){
    response.sendfile (__dirname+"/about.html");

});
y.get("/Contact",function(request,response){
    response.sendfile (__dirname+"/contact.html");

});

y.get("/Amazon",function(request,response){
    response.redirect("https://www.amazon.in");

});

y.get("/data",function(request,response){
    response.send("Hello Harshul How r u");

});

y.get("/render",function(request,response){
    response.render('about.html');

});

y.listen(3000,function(){

console.log("server running");

});

