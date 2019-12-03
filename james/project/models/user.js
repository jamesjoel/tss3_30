var connect = require("../config/connect");
module.exports.save=function(obj, cb){
    connect(function (err, client) {
        var db = client.db("tss3");
        db.collection("user").insert(obj, cb);
    });
}