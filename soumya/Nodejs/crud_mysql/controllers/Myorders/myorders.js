var express = require("express");
var routes = express.Router();
var Buynow = require("../../models/buynow");
routes.get("/", function (req, res) {
    // var where = {};
    Buynow.check({user_id: req.session._id}, function (err, result) {
        var pagedata = {
            pagename: "myorders/index",
            title: "My Orders",
            orders: result
        }
        res.render("layout", pagedata);
    });
});


module.exports = routes;