var express = require("express");
var app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res){
    var a = "Rohit Verma";
    var obj = { name :  a, age : 25, city : "indore"};


    res.render("home", obj);
});

app.get("/about", function(req, res){
    var obj = { a : 20 }
    res.render("about", obj);
}); 

app.get("/list", function(req, res){
    var data = [
        {
            name : "rohit",
            age : 25,
            city : "indore"
        },
        {
            name : "raj",
            age : 20,
            city : "ujjain"
        },
        {
            name : "jaya",
            age : 23,
            city : "bhopal"
        },
        {
            name : "james",
            age : 20,
            city : "indore"
        },
        {
            name : "gaurav",
            age : 23,
            city : "indore"
        }
    ];
    var student = { math : 62, english : 73 };

    var obj = { info : data, x : { demo : "Rajat" }, marks : student };
    res.render("list", obj);
});



app.listen(3000, function(){
    console.log("Server Running");
});