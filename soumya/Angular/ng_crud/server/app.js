var express = require("express");
var app = express();
// var router = express.Router();
var cors = require("cors");
var bodyParser = require("body-parser");
//MongoDB Connect
var mongodb = require("mongodb");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

var sha1 = require("sha1");
//fileUpload
var fileUpload = require("express-fileupload");
var random = require("randomstring");
var path = require("path");
//JWT Token
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
var jwt = require("jsonwebtoken");
var imgPath = [];
var portNo = 5000;

app.use(bodyParser());
app.use(cors());

app.use(fileUpload());

app.use(express.static(__dirname + "/public"));
//Web Service Api

app.get("/api/getimage", (req, res) => {
    MongoClient.connect(url, (err, client) => {
        var db = client.db("practice");
        db.collection("ngslider").find().toArray((err, result) => {
            result.forEach((obj, n) => {
                imageName = obj.image;
                result[n].image = "http://localhost:5000/" + imageName;
                // console.log("dsfsdadsfsa",imageName);
                //  imgPath.push("http://localhost:5000/" +imageName);
                // console.log(imgPath);
            });
            res.status(200).send(result);
        });
    });
});

app.post("/api/fileupload", (req, res, ) => {
    var image = req.files.image;
    var size = image.size;
    var imageExt = imgExt(image.name);
    var ext = imageExt[1];
    var imageNewName = imageExt[0];

    if (ext == "png" || ext == "jpg" || ext == "jpeg" || ext == "gif") {
        if (size <= 1024 * 1024) {
            var uploadPath = path.resolve() + "/public/" + imageNewName;
            MongoClient.connect(url, (err, client) => {
                var db = client.db("practice");
                image.mv(uploadPath, err => {
                    db.collection("ngslider").insert({ image: imageNewName }, (err, result) => {
                        obj = result.ops[0];
                        obj.image = "http://localhost:5000/" + obj.image;
                        // console.log(path);
                        // imgPath.push(newImgName);
                        res.status(200).send(obj);
                    });
                });
            });
        } else {
            res.status(400).send({
                status: false,
                msg: "sizeErr"
            });
        }
    } else {
        res.status(400).send({
            status: false,
            msg: "extErr"
        });
    }


});

function imgExt(image_name) {
    randomString = random.generate(25);
    var arr = image_name.split('.');
    var extension = arr[arr.length - 1];
    var newName = randomString + '.' + extension;
    return [newName, extension];
}

app.post("/api/signup", (req, res) => {
    var date = req.body.birth.date;
    var month = req.body.birth.month - 1;
    var year = req.body.birth.year;
    // console.log("METHOD__post", date, month, year);
    var d = new Date(year, month, date);
    delete req.body.birth;
    req.body.dob = d;
    req.body.password = sha1(req.body.password);
    // console.log("METHOD__post", req.body);

    MongoClient.connect(url, (err, client) => {
        var db = client.db("demo");
        db.collection("user").insert(req.body, (err, result) => {
            res.status(200).send(result.ops[0]);
        });
    });
});

app.get("/api/getuser", backdoor, (req, res) => {
    // console.log("GET___getuser",req.headers.authorization);
    // console.log(req.userData);
    id = req.userData.id;
    MongoClient.connect(url, (err, client) => {
        var db = client.db("demo");
        db.collection("user").find({ _id: mongodb.ObjectId(id) }).toArray((err, result) => {
            res.status(200).send(result[0]);
        });
    });

});



function backdoor(req, res, next) {

    if (!req.headers.authorization) {

        res.status(401).send({ msg: "Unauthorized User" });

    } else if (req.headers.authorization == "") {

        res.status(401).send({ msg: "Unauthorized User" });

    } else {

        var encToken = req.headers.authorization;
        var decToken = cryptr.decrypt(encToken);
        // console.log("rrrrrrrrrrrrrrrr", decToken);
        var verifyToken = jwt.verify(decToken, "This Is Secret Key");

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
        var db = client.db("demo");
        db.collection("user").find({ email: u }).toArray((err, result) => {
            if (result.length >= 1) {
                if (result[0].password == sha1(p)) {
                    var token = jwt.sign({ id: result[0]._id, name: result[0].fullName }, "This Is Secret Key", { expiresIn: 3600 });
                    // console.log(token);
                    var encryptToken = cryptr.encrypt(token);
                    // console.log(encryptToken);
                    // var decryptToken = cryptr.decrypt(encryptToken);
                    // console.log(decryptToken);
                    res.status(200).send({
                        status: true,
                        encryptToken
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



//Restful API

app.get("/api/employee", backdoor, (req, res) => {
    // console.log("METHOD__GET");
    MongoClient.connect(url, (err, client) => {
        var db = client.db("demo");
        db.collection("employee").find().toArray((err, result) => {
            res.status(200).send(result);
        });
    });
});

app.post("/api/employee", backdoor, (req, res) => {
    // console.log("METHOD__post");
    MongoClient.connect(url, (err, client) => {
        var db = client.db("demo");
        db.collection("employee").insert(req.body, (err, result) => {
            res.status(200).send(result.ops[0]);
        });
    });
});


app.put("/api/employee/:id", backdoor, (req, res) => {
    console.log("METHOD__put");
    var id = mongodb.ObjectId(req.params.id);
    delete req.body._id;
    MongoClient.connect(url, (err, client) => {
        var db = client.db("demo");
        db.collection("employee").update({ _id: id }, { $set: req.body }, (err, result) => {
            res.status(200).send(result);
        });
    });
});


app.delete("/api/employee/:id", backdoor, (req, res) => {
    // console.log("METHOD__delete");
    MongoClient.connect(url, (err, client) => {
        var db = client.db("demo");
        db.collection("employee").remove({ _id: mongodb.ObjectId(req.params.id) }, (err, result) => {
            res.status(200).send(result);
        });
    });
});

// app.get("/", (req, res) => {
//     // console.log(path.resolve());
//     res.sendFile(path.resolve("index.html"));
// });

app.listen(portNo, () => {
    console.log("Your Server Running On Port No:" + portNo + "...");
});