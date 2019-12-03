var MongoClient = require("mongodb").MongoClient;
var database = require("./database");
// MongoClient.connect(database.dbUrl, function(err, client) {
//     var db = client.db(database.dbName);
//     db.collection("user").insert(req.body, function(err, client) {

//     });
// });
module.exports = function(client) {
    MongoClient.connect(database.dbUrl, client);
}