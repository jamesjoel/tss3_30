var connect = require("../config/connect");
var database = require("../config/database");


module.exports.search1 = function(where,limitnum,cb){

    connect(function(err,client){
        var db = client.db(database.dbName);
        db.collection("cities").find(where).limit(limitnum).toArray(cb);
    });
}

module.exports.search2 = function(where,num,limitnum,cb){

    connect(function(err,client){
        var db = client.db(database.dbName);
        db.collection("cities").find(where).skip(num).limit(limitnum).toArray(cb);
    });
}

module.exports.count = function(cb){
    connect(function(err,client){
        var db = client.db(database.dbName);
        db.collection("cities").count(cb);
    });
}  
