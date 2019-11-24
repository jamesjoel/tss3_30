var express = require("express");
var web = express();

web.set("view engine","ejs");
web.use(express.static(__dirname+"/public"));

web.get("/",function(req,res){
  var pagedata={
      pagename: "index"
  }
    res.render("layout",pagedata);
});

web.get("/About",function(req,res){
  var pagedata={
      pagename: "About"
  }
    res.render("layout",pagedata);
});

web.listen(3000,function(){
  console.log("Server running");
});