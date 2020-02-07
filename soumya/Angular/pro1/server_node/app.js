var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var MongoClient = require("mongodb").MongoClient;
var sha1 = require("sha1");
var portNo = 3000;
app.use(bodyParser());
app.use(cors());






app.get("/api/getuser", backdoor, function (req, res) {
    res.send({name : "rohit"});
});

function backdoor(req, res, next) {
    // console.log("----------------", req.headers);
    if (!req.headers.authorization) {
        res.status(401).send({ msg: "Unathorized User" });
    }
    else {
        if (req.headers.authorization == "") {
            res.status(401).send({ msg: "Unathorized User" });

        }
        else {
            var token = req.headers.authorization;
            var payload = jwt.verify(token, "this is my secret key");
            if (!payload) {
                res.status(401).send({ msg: "Unathorized User" });

            }
            else {
                req.userData = payload;
                next();
            }
        }
    }
}





app.post("/api/login", function (req, res) {
    var u = req.body.username;
    var p = req.body.password;
    MongoClient.connect("mongodb://localhost:27017", function(err, client){
        var db = client.db("practice");
        db.collection("user").find({ email : u }).toArray(function(err, result){
            if(result.length>=1) {
                if(result[0].password == p){
                    var token = jwt.sign({ id: result[0]._id, name: result[0].f_name }, "this is my secret key", { expiresIn: 3600 });
                    res.status(200).send({
                        success: true,
                        token
                    });
                } else {
                    res.status(401).send({
                        success: false,
                        msg: "This Password is Incorrect"
                    })
                }
            } else {
                res.status(401).send({
                    success: false,
                    msg: "This Username And Password is Incorrect"
                })
            }
        });
    });

    
});






app.listen(portNo, function () {
    console.log("Your server running on Port No: "+portNo);
});