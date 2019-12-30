var express = require("express");
var routes = express.Router();
var Buynow = require("../../models/buynow");
var Product = require("../../models/product");
routes.get("/", function (req, res) {
    Buynow.check({}, function (err, result) {
        result.forEach(function(x){
            if(req.session._id == x.user_id){

                console.log(x);

            }
        });
        // var pagedata = {
        //     pagename: "myorders/index",
        //     title: "My Orders",
        //     orders: result
        // }
        // res.render("layout", pagedata);
    });
});


module.exports = routes;