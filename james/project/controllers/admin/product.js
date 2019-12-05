var express = require("express");
var routes = express.Router();

var Product = require("../../models/product");


routes.get("/", function (req, res) {
    var pagedata = { title: "Product", pagename: "admin/product/index" };
    res.render("admin_layout", pagedata);
});
routes.post("/", function(req, res){
    req.body.product_price = parseInt(req.body.product_price);
    req.body.product_discount = parseInt(req.body.product_discount);
    Product.insert(req.body, function(err, result){
        console.log(result.ops[0]._id);

        /*
        result = {
            result : { ok : 1, n : 1},
            ops : [
                {

                }
            ]
        }




        */
        res.redirect("/admin/product");
    });
});





module.exports = routes;