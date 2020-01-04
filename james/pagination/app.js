var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";



app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());


var perPageRow = 100;

app.get("/", function(req, res){

    
    MongoClient.connect(url, function(err, client){
        var db = client.db("tss3");
        db.collection("cites").count(function(err, total){


            var totalPages = Math.ceil(total/perPageRow);

            // console.log(totalPages);
            db.collection("cites").find().limit(perPageRow).toArray(function(err, result){
    
                res.render("index", { cities: result, totalPages: totalPages, currentPage: 1, sNo : 0 });
            });
        });

    });




});

app.get("/:pageno", function (req, res) {
    
    // console.log(req.params);
    var pageno = req.params.pageno; // 8
    var x = pageno-1; // 7
    var y = x*perPageRow; // 700

    MongoClient.connect(url, function (err, client) {
        var db = client.db("tss3");
        db.collection("cites").count(function (err, total) {


            var totalPages = Math.ceil(total / perPageRow);

            // console.log(totalPages);
            db.collection("cites").find().skip(y).limit(perPageRow).toArray(function (err, result) {

                res.render("index", { cities: result, totalPages: totalPages, currentPage : pageno, sNo : y });
            });
        });

    });




});









app.listen(3000, function(){
    console.log("server running");
});