var MongoClient = require("mongodb").MongoClient;
var database = require("./database");

module.exports= function(cb){
    MongoClient.connect(database.dbUrl,cb);
}




// MonoClient.connect(database.dbUrl,function(err,client){
//     if(err){
//         console.log(err);
//     }

//     var  db = client.db(database.dbName);
//     db.collection("user").insert(req.body,function(err,result){

//         if(err){
//             console.log(err);
//         }
//         res.redirect("/login");
//     });
// });

