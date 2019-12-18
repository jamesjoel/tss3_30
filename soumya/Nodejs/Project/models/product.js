var connect = require("../config/connect");
var database = require("../config/database");

module.exports.save = function(req_body, func) {
    connect(function(err, client) {
        if (err) {
            console.log(err);
        }
        var db = client.db(database.dbName);
        db.collection("product").insert(req_body, func);
    });
}
module.exports.check = function(where, cb) {
    connect(function(err, client) {
        var db = client.db(database.dbName);
        db.collection("product").find(where).toArray(cb);
    });
}

module.exports.Delete = function(where, cb) {
    connect(function(err, client) {
        var db = client.db(database.dbName);
        db.collection("product").remove(where, cb);
    });
}

module.exports.update = function(where, obj, cb) {
    connect(function(err, client) {
        var db = client.db(database.dbName);
        db.collection("product").update(where, { $set: obj }, cb);
    });
}