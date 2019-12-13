var connect = require("../config/connect");
var database = require("../config/database");

module.exports.insert=function(obj, cb){
    connect(function(err, client){
        var db = client.db(database.dbName);
        db.collection("product").insert(obj, cb);
    });
}

module.exports.update = function () { }

module.exports.delete = function (where, cb) {
    connect(function (err, client) {
        var db = client.db(database.dbName);
        db.collection("product").remove(where, cb);
    });
}

module.exports.search = function (where, cb) { 
    connect(function(err, client){
        var db = client.db(database.dbName);
        db.collection("product").find(where).toArray(cb);
    });
}