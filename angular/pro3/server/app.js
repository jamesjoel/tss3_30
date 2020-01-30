var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var MongoClient = require("mongodb").MongoClient;
var sha1 = require("sha1");
var mongodb = require("mongodb");

app.use(bodyParser());
app.use(cors());

app.get("/api/verifytoken", function(req, res){
    if(req.headers.authorization){
        if(req.header.authorization != ""){
            var token = req.headers.authorization;
            
            jwt.verify(token, "this is my secret key", (payload)=>{

            

                if (payload.message=="invalid token"){
                    console.log("wrong");
                    res.status(401).send({
                        success: false,
                        msg: "Wrong Token"
                    })
                }else {
                    console.log("correct");
                res.status(200).send({
                    success : true,
                    msg : "Correct Token"      
                })
            }
            });
        }
        else {
            res.status(401).send({
                success: false,
                msg: "Wrong Token"
            })
        }
    }
    else{
        res.status(401).send({
            success : false,
            msg : "Wrong Token"
        })
    }
});


app.get("/api/getuser", backdoor, function (req, res) {
        // console.log(req.userData);
        var id = req.userData.id;
    MongoClient.connect("mongodb://localhost:27017", function(err, client){
        var db = client.db('tss3');
        db.collection("user").find({ _id : mongodb.ObjectId(id)}).toArray(function(err, result){
            delete result[0].password;
            
            res.send(result[0]);
        });
    });
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
            var userInfo = jwt.verify(token, "this is my secret key");
            if (!userInfo) {
                res.status(401).send({ msg: "Unathorized User" });

            }
            else {
                req.userData = userInfo;
                next();
            }
        }
    }
}





app.post("/api/login", function (req, res) {
    var u = req.body.username;
    var p = req.body.password;
    MongoClient.connect("mongodb://localhost:27017", function(err, client){
        var db = client.db("tss3");
        db.collection("user").find({ email : u }).toArray(function(err, result){
            if(result.length>=1) {
                if(result[0].password == sha1(p)){
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






app.listen(3000, function () {
    console.log("server running");
});