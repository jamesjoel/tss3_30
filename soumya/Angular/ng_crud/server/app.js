var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var portNo = 3000;

app.use(bodyParser());
app.use(cors());



//Web Service Api

app.post("/api/signup", (req, res) => {
    var date = req.body.birth.date;
    var month = req.body.birth.month;
    var year = req.body.birth.year;
    // console.log("METHOD__post", date, month, year);
    var d = new Date(year, month, date);
    delete req.body.birth;
    req.body.dob = d;
    // console.log("METHOD__post", req.body);

    MongoClient.connect(url, (err, client) => {
        var db = client.db("practice");
        db.collection("user").insert(req.body, (err, result) => {
            res.status(200).send(result.ops[0]);
        });
    });
});

//Restful API

app.get("/api/employee", (req, res) => {
    // console.log("METHOD__GET");
    MongoClient.connect(url, (err, client) => {
        var db = client.db("practice");
        db.collection("employee").find().toArray((err, result) => {
            res.status(200).send(result);
        });
    });
});

app.post("/api/employee", (req, res) => {
    // console.log("METHOD__post");
    MongoClient.connect(url, (err, client) => {
        var db = client.db("practice");
        db.collection("employee").insert(req.body, (err, result) => {
            res.status(200).send(result.ops[0]);
        });
    });
});


app.put("/api/employee/:id", (req, res) => {
    console.log("METHOD__put");
    var id = mongodb.ObjectId(req.params.id);
    delete req.body._id;
    MongoClient.connect(url, (err, client) => {
        var db = client.db("practice");
        db.collection("employee").update({ _id: id }, { $set: req.body }, (err, result) => {
            res.status(200).send(result);
        });
    });
});


app.delete("/api/employee/:id", (req, res) => {
    // console.log("METHOD__delete");
    MongoClient.connect(url, (err, client) => {
        var db = client.db("practice");
        db.collection("employee").remove({ _id: mongodb.ObjectId(req.params.id) }, (err, result) => {
            res.status(200).send(result);
        });
    });
});


app.listen(portNo, () => {
    console.log("Your Server Running On Port No:" + portNo + "...");
});