var connect = require("../config/connect");
var database = require("../config/database");

module.exports.save = function(req_body, func) {
    connect(function(err, client) {

        var db = client.db(database.dbName);
        db.collection("buynow").insert(req_body, func);
    });
}

module.exports.check = function(where, cb) {
    connect(function(err, client) {
        var db = client.db(database.dbName);
        db.collection("buynow").find(where).toArray(cb);
    });
}

module.exports.update = function(where, obj, cb) {
    connect(function(req, client) {
        var db = client.db(database.dbName);
        db.collection("buynow").update(where, { $set: obj }, cb);
    });
}