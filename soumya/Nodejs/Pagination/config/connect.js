var database = require("./database");
var MongoClient = require("mongodb").MongoClient;

module.exports = function(cb){
    MongoClient.connect(database.dbUrl,cb);
}