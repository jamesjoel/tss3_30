var connect = require("../config/connect");
var database = require("../config/database");

module.exports.save = function(req_body, func) {
    connect(function(err, client) {

        var db = client.db(database.dbName);
        db.collection("user").insert(req_body, func);
    });
}