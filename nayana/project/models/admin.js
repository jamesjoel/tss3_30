var connect = require("../config/connect");
var database = require("../config/database");

module.exports.save = function(obj, cb){

    connect(function(err, client){
        var db = client.db(database.dbName);
        db.collection("admin").insert(obj, cb);

    });
}

module.exports.search = function(obj, cb){

      connect(function(err, client){
          var db = client.db(database.dbName);
          db.collection("admin").find(obj).toArray(cb);

      });

}