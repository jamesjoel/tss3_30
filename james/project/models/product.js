var connect = require("../config/connect");
var database = require("../config/database");
var mongodb = require("mongodb");

module.exports.insert=function(obj, cb){
    connect(function(err, client){
        var db = client.db(database.dbName);
        db.collection("product").insert(obj, cb);
    });
}

module.exports.update = function (where, obj, cb) {
    connect(function (err, client) {
        var db = client.db(database.dbName);
        db.collection("product").update(where, { $set : obj}, cb);
    });
 }

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

module.exports.addFieldsDiscount = function(cb){
    // Aggregating and It's stage ($addFields in a Stage)
    connect(function(err, client){
        var db = client.db(database.dbName);
        db.collection("product").aggregate([
            {
                $addFields : {
                    discounted_price : {
                        $subtract: ["$product_price", {
                                                       $divide: 
                                                            [
                                                                { 
                                                                 $multiply: ["$product_price", "$product_discount"]
                                                                }, 
                                                                100
                                                            ]
                                                       }
                                    ]
                       }
                }
            }
        ]).toArray(cb);





    });




}
module.exports.lookupFind=function(cb){
    connect(function (err, client) {
    var db = client.db(database.dbName);
    db.collection("product").aggregate([
        {
            $lookup : {
                from : "category",
                localField : "product_category",
                foreignField : "_id",
                as : "cate_info"
            }
        },
        {
            $addFields: {
                discounted_price: {
                    $subtract: ["$product_price", {
                        $divide:
                            [
                                {
                                    $multiply: ["$product_price", "$product_discount"]
                                },
                                100
                            ]
                    }
                    ]
                }
            }
        }

    ]).toArray(cb);



    });
}
