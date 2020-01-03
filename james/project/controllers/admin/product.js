var express = require("express");
var routes = express.Router();

var Product = require("../../models/product");
var Category = require("../../models/category");

var mongodb = require("mongodb");
var path = require("path");
var changename = require("../../helpers/changename");
var fs = require("fs");


routes.get("/", function (req, res) {
    // "localhost:3000/admin/product" for show add product page
    Category.search({}, function(err, result){
        //getting all category for show category dropdown
        var pagedata = { title: "Product", pagename: "admin/product/index", category : result, errorMsg : req.flash("msg") };
        res.render("admin_layout", pagedata);
        
    });
});



routes.post("/", function(req, res){
    // "localhost:3000/admin/product" for getting form data 
    // console.log(req.files);
    var image = req.files.image;
    var size = image.size;


    var imgData = changename(image.name);
    // calling changename helper for change and set unique name of each uploaded file

    var ext = imgData[1];
    var newName = imgData[0];


    var uploadPath = path.resolve()+"/public/upload/"+newName;
    // for set complete upload path to upload the file
    if(ext =="jpg" || ext == "gif" || ext == "png" || ext == "jpeg")
    {
        if(size <= (1024*1024))
        {
            image.mv(uploadPath, function(err){
            req.body.product_price = parseInt(req.body.product_price);
            req.body.product_discount = parseInt(req.body.product_discount);
            req.body.image = newName;

            Product.insert(req.body, function(err, result){
                    res.redirect("/admin/product/view");
                });
            });
        }
        else
        {
            req.flash("msg", "This File is Too large");
            res.redirect("/admin/product");
        }
    }
    else
    {
        req.flash("msg", "This File Type Not Allowed");
        res.redirect("/admin/product");
    }
    




    // image.mv(uploadPath, function(err){
    //     console.log("uploaeded .....");
    // });


    
});

routes.get("/view", function(req, res){
    // localhost:3000/admin/product/view to show all added product
    /*Product.search({}, function(err, result){
        // console.log(result);
        var allProduct=[];
        result.forEach(function(x){
            var d = x.product_discount;
            var p = x.product_price;

            x.discounted_price = p - (p * d)/100;
            allProduct.push(x);
            
        });

        // console.log(allProduct);
        var pagedata = { title: "View Product", pagename: "admin/product/view", product : allProduct, errorMsg : req.flash("msg") };
        res.render("admin_layout", pagedata); 

    });*/

    Product.addFieldsDiscount(function(err, result){
        var pagedata = { title: "View Product", pagename: "admin/product/view", product: result, errorMsg: req.flash("msg") };
        res.render("admin_layout", pagedata); 
    });



});
routes.get("/delete/:id", function(req, res){
    // localhost:3000/admin/product/delete/ID for get unique id and delete it from DB
    var a = req.params.id;

    // fs.unlink();
    Product.search({ _id : mongodb.ObjectId(a)}, function(err, result){
        // console.log(result);
        var imgname = result[0].image;
        var delPath = path.resolve() + "/public/upload/" +imgname;
    // for set complete deleted path to delete a file

        fs.unlink(delPath, function(err){
            // for delete file by unlink fun
            Product.delete({ _id: mongodb.ObjectId(a) }, function (err, result) {
                
                res.redirect("/admin/product/view");
            });
        });
    });


    
});
routes.get("/edit/:id", function(req, res){
    // localhost:3000/admin/product/edit/ID to show specific product for edit its info
    var a = req.params.id;
    Category.search({}, function(err, result1){

        Product.search({ _id : mongodb.ObjectId(a)}, function(err, result2){
            // console.log(result);
            var pagedata = { title: "Edit Product", pagename: "admin/product/edit", product: result2[0], category : result1 };
            res.render("admin_layout", pagedata); 
        });
    });
});

routes.post("/update", function(req, res){
    // for UPDATE product data to DB
    var id = req.body.id;
    delete req.body.id;
    Product.update({ _id : mongodb.ObjectId(id)}, req.body, function(err, result){
        res.redirect("/admin/product/view");
    });
});


routes.post("/upload", function(req, res){
    // for update specific product image in DB and Folder also
    var id = req.body.id;
    var image = req.files.image;
    var size = image.size;
    var imgData = changename(image.name);
    var uploadPath = path.resolve() + "/public/upload/" + imgData[0];

    if(imgData[1]=="jpg" || imgData[1]=="jpeg" || imgData[1]=="png" || imgData[1]=="gif")
    {
        if(size <= (1024*1024))
        {
            image.mv(uploadPath, function(err){
                Product.update({ _id : mongodb.ObjectId(id) }, { image : imgData[0] }, function(err, result){
                    res.redirect("/admin/product/view");
                });
            });
        }
        else
        {
            req.flash("msg", "This File is Too large");
            res.redirect("/admin/product/view");
        }
    }
    else
    {
        req.flash("msg", "This File Type not allowed");
        res.redirect("/admin/product/view");
    }

});




module.exports = routes;