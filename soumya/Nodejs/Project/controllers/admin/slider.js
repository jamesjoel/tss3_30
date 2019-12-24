var express = require("express");
var routes = express.Router();
var path = require("path");
var uploadfunc = require("../../helpers/uploadfunc");
var Slider = require("../../models/slider");
var fs = require("fs");
var mongodb = require("mongodb");

routes.get("/", function (req, res) {
    Slider.check({},function(err,result){

        var pagedata = {
            pagename: "admin/slider/index",
            title: "Slider",
            slider: result ,
            errMsg: req.flash("msg")
        }
        res.render("admin_layout", pagedata);
    });
});

routes.post("/", function (req, res) {
    // console.log(req.files);
    var image = req.files.image;
    var size = image.size;
    var return_value = uploadfunc(image.name);
    var imagename = return_value[0];
    var ext = return_value[1];

    if (ext == "png" || ext == "jpg" || ext == "jpeg" || ext == "gif") {
        if (size <= 1024 * 1024) {
            // console.log(result);
            var UploadPath = path.resolve() + "/public/Slider/" + imagename;
            image.mv(UploadPath, function (err) {
                Slider.save({ image: imagename }, function (err, result) {
                    res.redirect("/admin/slider");
                });
            });
 
        } else {
            req.flash("msg", "This File Size is Too Large");
            res.redirect("/admin/slider");
        }
    } else {
        req.flash("msg", "This File Type is Not Allowed");
        res.redirect("/admin/slider");
    }
});

routes.post("/uploadslider", function (req, res) {
   
    var id = req.body.id;
    var image = req.files.image;
    var size = image.size;
    var return_value = uploadfunc(image.name);
    var imgname = return_value[0];
    var ext = return_value[1];
    var UploadPath = path.resolve() + "/public/Slider/" + imgname;
    if (ext == "jpg"|| ext == "jpeg"|| ext == "png"|| ext == "gif") {
        if (size <= 1024*1024) {
            Slider.check({_id : mongodb.ObjectId(id)},function(err,result){
               var OldImageName = result[0].image;
               var DelPath = path.resolve()+"/public/Slider/"+OldImageName;
               fs.unlink(DelPath,function(err){

                   image.mv(UploadPath,function(err){
                           Slider.update({_id: mongodb.ObjectId(id)},{image : imgname},function(err,result){
                               res.redirect("/admin/slider");
                           });
                   });
               });
            });

        } else {
            req.flash("msg", "This File is Too Large");
            res.redirect("/admin/slider");
        }
    }else{
        req.flash("msg", "This File Type not allowed");
        res.redirect("/admin/slider");
    }
});

routes.get("/delete/:id", function (req, res) {
    var id = req.params.id; 
    Slider.check({ _id: mongodb.ObjectId(id) }, function (err, result) {
        // console.log(result);
        var imagename = result[0].image;
        var delPath = path.resolve() + "/public/Slider/" + imagename;
        fs.unlink(delPath, function (err) {
            Slider.Delete({ _id: mongodb.ObjectId(id) }, function (err, result) {
                res.redirect("/admin/slider");
            });
        });
    });
});

module.exports = routes;