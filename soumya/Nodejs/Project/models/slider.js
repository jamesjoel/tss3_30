var connect = require("../config/connect");
var database = require("../config/database");

module.exports.update = function(where, obj, cb) {
    connect(function(req, client) {
        var db = client.db(database.dbName);
        db.collection("slider").update(where, { $set: obj }, cb);
    });
}

module.exports.save = function(req_body, func) {
    connect(function(err, client) {

        var db = client.db(database.dbName);
        db.collection("slider").insert(req_body, func);
    });
}

module.exports.check = function(where, cb) {
    connect(function(err, client) {
        var db = client.db(database.dbName);
        db.collection("slider").find(where).toArray(cb);
    });
}

module.exports.Delete = function(where, cb) {
    connect(function(err, client) {
        var db = client.db(database.dbName);
        db.collection("slider").remove(where, cb);
    });
}
