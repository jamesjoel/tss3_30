var portNo = 3200;
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var callApiFromRequest = require("./Request");
var http = require("http");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var mongodb = require("mongodb");


app.use(bodyParser());
app.use(cors());

// http://dummy.restapiexample.com/api/v1/employees




// app.get("/api/multidata", function (req, res) {
//     MongoClient.connect(url, function (err, client) {
//         var db = client.db("practice");
//         db.collection("teacher").find().toArray(function (err, result) {
//             // res.send(result);
//             allTeacher = result;
//             db.collection("user").find().toArray(function (err, result) {
//                 obj = {
//                     Teacher: allTeacher,
//                     User: result
//                 }
//                 // console.log(obj);
                
//                 res.send(obj);
//             });
//         });
//     });
// });

app.listen(3300, function () {
    console.log("Your Server Running On Port: 3300.... ");
});

http.createServer(function(req,res){
    if(req.url === "/api/myapi"){
        callApiFromRequest.callApi(function(response){
            // console.log("========",response);
            res.write(JSON.stringify(response));
            res.end();
        });
    }
}).listen(portNo);
console.log("Your Server Running On Port:" + portNo + ".... ");















































// app.get("/api/teacher/:id",function(req,res){
//     var id = req.params.id;
//     MongoClient.connect(url,function(err,client){
//         var db = client.db("practice");
//         db.collection("teacher").find({_id: mongodb.ObjectId(id)}).toArray(function(err,result){
//             res.send(result[0]);
//         });
//     });
// });


app.get("/api/teacher",function(req,res){
    MongoClient.connect(url,function(err,client){
        var db = client.db("practice");
        db.collection("teacher").find().toArray(function(err,result){
            res.send(result);
        });  
    });
});


// app.get("/api/teacher/:id",function(req,res){
//     var id = req.params.id;
//     MongoClient.connect(url,function(err,client){
//         var db = client.db("practice");
//         db.collection("teacher").find({_id: mongodb.ObjectId(id)}).toArray(function(err,result){
//             res.send(result[0]);
//         });
//     });
// });

// app.post("/api/teacher/",function(req,res){
//     MongoClient.connect(url,function(err,client){
//         var db = client.db("practice");
//         db.collection("teacher").insert(req.body,function(err,result){
//             res.send(result.ops[0]);
//         });
//     });
// });

// app.put("/api/teacher/:id",function(req,res){
//     var id = req.params.id;
//     // console.log(req.params);
//     // console.log(req.body);
//     MongoClient.connect(url,function(err,client){
//         var db = client.db("practice");
//         db.collection("teacher").update({ _id : mongodb.ObjectId(id)},{ $set : req.body },function(err,result){
//             res.send({success : true});
//         });
// app.post("/api/teacher/",function(req,res){
//     MongoClient.connect(url,function(err,client){
//         var db = client.db("practice");
//         db.collection("teacher").insert(req.body,function(err,result){
//             res.send(result.ops[0]);
//         });
//     });
// });

// app.put("/api/teacher/:id",function(req,res){
//     var id = req.params.id;
//     // console.log(req.params);
//     // console.log(req.body);
//     MongoClient.connect(url,function(err,client){
//         var db = client.db("practice");
//         db.collection("teacher").update({ _id : mongodb.ObjectId(id)},{ $set : req.body },function(err,result){
//             res.send({success : true});
//         });
//     });
// });


// app.delete("/api/teacher/:id",function(req,res){
//     var id = req.params.id;
//     MongoClient.connect(url,function(err,client){
//         var db = client.db("practice");
//         db.collection("teacher").remove({_id: mongodb.ObjectId(id)},function(err,result){
//             res.send({success: true});
//         });
//     });
// });
