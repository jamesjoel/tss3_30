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