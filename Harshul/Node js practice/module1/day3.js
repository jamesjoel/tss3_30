var express = require("express");
var web = express();

web.set("view engine","ejs");

web.get("/", function(req, res){
    var obj = { a : 25 }
    res.render("Day3", obj);
}); 

web.get("/About", function(req, res){
    var a = "john cena";
    var obj={
        name: a, age:47, city:"kuwait"
    };
    res.render("about", obj);
}); 


web.listen(3000,function(){
    console.log("Aapka server start hogya he");
});