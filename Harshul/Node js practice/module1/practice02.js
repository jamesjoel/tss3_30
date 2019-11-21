var express = require("express");
var fuse    = express ();
fuse.set("view engine","ejs");
fuse.get("/",function(req,res){
    var data =[
        {
        SNo : 1,
        Name : "suresh raina",
        Age : 30,
        city: "jabalpur"},

      {  SNo : 2,
        Name : "Virat kholi",
        Age : 29,
        city: "Ahmdabad" },

{        SNo : 3,
        Name : "Sharman",
        Age : 47,
        city: "indore"},

       { SNo : 4,
        Name : "pintu",
        Age : 40,
        city: "bhopal"},

       { SNo : 5,
        Name : "gaurav",
        Age : 34,
        city: "pune"},

{        SNo : 6,
        Name : "rahul",
        Age : 30,
        city: "mumbai"
    },
    ]; 
    var opex={
        cool: data, p: { demo: "pintu" },
};
    res.render("practice2",opex);
});

fuse.listen(3000,function(){
    console.log("Dekh kya raha hai bay");
});
