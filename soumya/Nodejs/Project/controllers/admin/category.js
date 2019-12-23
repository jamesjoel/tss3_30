var express = require("express");
var routes = express.Router();
var Category = require("../../models/category");
var mongodb = require("mongodb");
var Product = require("../../models/product");
var fs = require("fs");
var path = require("path");

routes.get("/", function (req, res) {
    var pagedata = {
        pagename: "admin/category/index",
        title: "Add Category"
    }
    res.render("admin_layout", pagedata);
});

routes.get("/view", function (req, res) {
    Category.check({}, function (err, result) {
        var pagedata = {
            pagename: "admin/category/view",
            title: "Show Category",
            Category: result
        }
        res.render("admin_layout", pagedata);
    });
})

routes.get("/edit/:id", function (req, res) {
    // console.log(req.params);
    var id = req.params.id;
    Category.check({ _id: mongodb.ObjectId(id) }, function (err, result) {
        // console.log(result);
        var pagedata = { title: "Edit Category", pagename: "admin/category/edit", category: result[0] };
        res.render("admin_layout", pagedata);
    });
});

routes.get("/delete/:id", function (req, res) {
    // console.log(req.query);
    var a = req.params.id;

    Category.Delete({ _id: mongodb.ObjectId(a) }, function (err, result) {
        Product.check({ product_category: a }, function (err, result) {
            result.forEach(function (x) {
                var product_image = x.image;
                var DelPath = path.resolve() + "/public/uploads/" + product_image;

                fs.unlink(DelPath, function (err) {});
            });

            Product.Delete({ product_category: a }, function (err, result) {

                res.redirect("/admin/category/view");
            });

        });
    });

});


routes.post("/", function (req, res) {
    Category.save(req.body, function (err, client) {
        res.redirect("/admin/category/view");
    });
});

routes.post("/update", function (req, res) {
    // console.log(req.body);
    var id = req.body.id
    delete req.body.id
    Category.update({ _id: mongodb.ObjectId(id) }, req.body, function (err, result) {
        res.redirect("/admin/category/view");
    });
});


module.exports = routes;