var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var mongodb = require("mongodb");

var fileupload = require("express-fileupload");

app.use(bodyParser());
app.use(cors());
app.use(fileupload());


app.use(express.static(__dirname+"/public"));

app.get("/api/employee", (req, res)=>{
    console.log("----- GET CALL");
    MongoClient.connect(url, (err, client)=>{
        var db = client.db("tss3");
        db.collection("employee").find().toArray((err, result)=>{
            res.status(200).send(result);
        });
    });
});

app.post("/api/employee", (req, res) => {
    console.log("----- POST CALL");
    MongoClient.connect(url, (err, client) => {
        var db = client.db("tss3");
        db.collection("employee").insert(req.body, (err, result) => {
            res.status(200).send(result.ops[0]);
        })
    })
});

app.put("/api/employee/:id", (req, res) => {
    
    var id = mongodb.ObjectId(req.params.id);
    delete req.body._id;
    MongoClient.connect(url, (err, client) => {
        var db = client.db("tss3");
        db.collection("employee").update({ _id : id }, { $set : req.body }, (err, result) => {
            res.status(200).send(result);
        })
    })
});

app.delete("/api/employee/:id", (req, res) => {
    console.log("----- DELETE CALL");
    var id = mongodb.ObjectId(req.params.id);
    MongoClient.connect(url, (err, client) => {
        var db = client.db("tss3");
        db.collection("employee").remove({ _id: id }, (err, result) => {
            res.status(200).send(result);
        })
    })
});




app.post("/api/fileupload", (req, res)=>{
    var file = req.files.image;
    file.mv(__dirname+"/public/image/"+file.name, (err)=>{
        if(err){
            console.log(err);
        }
        res.send({ path : "http://localhost:3000/image/"+file.name });
    })
});





app.listen(3000, ()=>{
    console.log("server running");

})
/*
1. What is Angular CLI, Installation, Basic of TypeScript
2. Component (create and call form another Component --- Shared Component)
3. Databinding (ngModel)
4. Interpolation ( {{ }} )
5. Event Binding ( ----- (click), (dblclick), etc. )
6. 2 way data Binding
7. Complete Routing Module
7. Data Passing 
    a. Parent to Child (@Input)
    b. Child to Parent (@Output)
    c. Child to Parent (@ViewChild)
8. what is Service, In-Built Services and Custome Services
9. HttpClient (RESt Full Api Calling - get, post, put, delete) Service, Router
10. Login Auth with JWT
11. Auth Guard
12. What is Directives, In-Built Dir, Types of Dir, Custome Dir
13. What is Pipes, In-Build Pipes, Custome Pipes
14. Reactive Form Validation
15. Template Reffrence Variable
16. Parameterized URL, Datapassing By URL
17. What is Module, In-Built Module, Custome Module(Feature Module)
18. Lazy Loading
19. File Upload
20. Slider, Callender, other APIs
*/