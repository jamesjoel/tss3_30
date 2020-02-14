var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;
var mongodb = require("mongodb");
var url = "mongodb://localhost:27017";
const DbName = "module";
var sha1 = require("sha1");
var portNO = 6000;


app.use(bodyParser());
app.use(cors());

app.post("/api/signup", (req, res) => {

    req.body.password = sha1(req.body.password);

    MongoClient.connect(url, (err, client) => {
        var db = client.db(DbName);
        db.collection("user").insert(req.body, (err, result) => {
            res.status(200).send(result.ops[0]);
        });
    });
});

function backdoor(req, res, next) {

    if (!req.headers.authorization) {

        res.status(401).send({ msg: "Unauthorized User" });

    } else if (req.headers.authorization == "") {

        res.status(401).send({ msg: "Unauthorized User" });

    } else {

        var token = req.headers.authorization;
        // var decToken = cryptr.decrypt(encToken);
        // console.log("rrrrrrrrrrrrrrrr", decToken);
        var verifyToken = jwt.verify(token, "This Is Secret Key");

        if (!verifyToken) {

            res.status(401).send({ msg: "Unauthorized User" });

        } else {
            req.userData = verifyToken;
            next();
        }
    }
}


app.post("/api/login", (req, res) => {
    var u = req.body.username;
    var p = req.body.password;
    MongoClient.connect(url, (err, client) => {
        var db = client.db(DbName);
        db.collection("user").find({ email: u }).toArray((err, result) => {
            if (result.length >= 1) {
                if (result[0].password == sha1(p)) {
                    var token = jwt.sign({ id: result[0]._id, name: result[0].fullName }, "This Is Secret Key", { expiresIn: 3600 });
                    // console.log(token);
                    // var encryptToken = cryptr.encrypt(token);
                    // console.log(encryptToken);
                    // var decryptToken = cryptr.decrypt(encryptToken);
                    // console.log(decryptToken);
                    res.status(200).send({
                        status: true,
                        token
                    });

                } else {
                    res.status(401).send({
                        status: false,
                        msgType: "password"

                    });
                }
            } else {
                res.status(401).send({
                    status: false,
                    msgType: "username"

                });
            }
        });
    });

});


app.listen(portNO,()=>{
    console.log("Your Server Running On "+ portNO)
});