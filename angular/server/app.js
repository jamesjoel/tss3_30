var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var mongodb = require("mongodb");
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser());
// for sharing APIs to another Domain/Port
app.use(cors());

app.get("/api/teacher", function(req, res){
    MongoClient.connect(url, function(err, client){
        if(err){
            console.log("-----", err);
            return;
        }
        var db = client.db("tss3");
        db.collection("teacher").find().toArray(function(err, result){
            res.send(result);
        });
    });
});
app.get("/api/teacher/:id", function (req, res) {
    var id = req.params.id;
    id = mongodb.ObjectId(id);
    MongoClient.connect(url, function (err, client) {
        var db = client.db("tss3");
        db.collection("teacher").find({_id : id}).toArray(function (err, result) {
            res.send(result[0]);
        });
    });
});



app.post("/api/teacher", function (req, res) {
    MongoClient.connect(url, function (err, client) {
        var db = client.db("tss3");
       // console.log(req.body);
        db.collection("teacher").insert(req.body, function (err, result) {
            res.send(result.ops[0]);
        });
    });
});

app.put("/api/teacher/:id", function(req, res){
    var id = req.params.id;
    // console.log(req.params);
    // console.log(req.body);
    id = mongodb.ObjectId(id);
    MongoClient.connect(url, function (err, client) {
        var db = client.db("tss3");
        db.collection("teacher").update({ _id : id}, {$set : req.body}, function (err, result) {
            res.send({ success : true });
        });
    });
});

app.delete("/api/teacher/:id", function(req, res){
    var id = req.params.id;
    id = mongodb.ObjectId(id);
    MongoClient.connect(url, function (err, client) {
        var db = client.db("tss3");
        db.collection("teacher").remove({ _id: id }, function (err, result) {
            res.send({ success : true });
        });
    });
});







app.listen(3000, function(){
    console.log("server running");
});