var express = require("express");
var routes = express.Router();
var Product = require("../../models/product");
var mongodb = require("mongodb");
var Buynow = require("../../models/buynow");
var Product = require("../../models/product");
routes.get("/:id", function (req, res) {
    // console.log(req.params);
    var id = req.params.id;
    Product.check({ _id: mongodb.ObjectId(id) }, function (err, result) {

        var pagedata = {
            pagename: "MoreInfo/index",
            title: "More Info",
            product: result[0]
        }
        res.render("layout", pagedata);
    });
});

routes.get("/buynow/:id", function (req, res) {
    // console.log(req.body);
    var productid = req.params.id;
    var userid = req.session._id;

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    req.body.product_id = productid;
    req.body.user_id = userid;
    req.body.date = date;
    req.body.time = time;

    if (req.session.is_user_logged_in) {

        Buynow.save(req.body, function (err, result) {
            Product.check({ _id: mongodb.ObjectId(productid) }, function (err, result) {

                var pagedata = {
                    pagename: "MoreInfo/congrats",
                    title: "Successfully",
                    product_name: result[0].product_title,

                }

                res.render("layout", pagedata);
            });
        });
    } else {
        req.flash("error", "If You Want To Buy This Product,You Must First Login ");
        res.redirect("/login");
    }

});


module.exports = routes;