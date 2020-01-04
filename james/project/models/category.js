var connect = require("../config/connect");
var database = require("../config/database");
module.exports.save = function (obj, cb) {
    connect(function (err, client) {
        var db = client.db(database.dbName);
        db.collection("category").insert(obj, cb);
    });
}

module.exports.search = function (where, cb) {
    connect(function (err, client) {
        var db = client.db(database.dbName);
        db.collection("category").find(where).toArray(cb);
    });
}
module.exports.delete=function(where, cb){
    connect(function (err, client) {
        var db = client.db(database.dbName);
        db.collection("category").remove(where, cb);
    });
}
module.exports.update=function(where, obj, cb){
    connect(function (err, client) {
        var db = client.db(database.dbName);
        db.collection("category").update(where, { $set : obj }, cb);
    });
}

module.exports.lookupFind = function(cb){
    connect(function (err, client) {
        var db = client.db(database.dbName);
        db.collection("category").aggregate([
            {
                $lookup : {
                    from : "product",
                    localField : "_id",
                    foreignField : "product_category",
                    as : "pro_info"
                }
            }
        ]).toArray(cb);
    });
}



module.exports


