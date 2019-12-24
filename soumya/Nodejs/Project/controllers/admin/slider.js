var express = require("express");
var routes = express.Router();
var path = require("path");
var uploadfunc = require("../../helpers/uploadfunc");
var Slider = require("../../models/slider");
var fs = require("fs");
var mongodb = require("mongodb");
routes.get("/",function(req,res){
    var pagedata = {
        pagename: "admin/slider/index",
        title: "Slider",
        errMsg : req.flash("msg")
    }
    res.render("admin_layout",pagedata);
});

routes.post("/",function(req,res){
    // console.log(req.files);
    var image = req.files.image;
    var size = image.size;
    var return_value = uploadfunc(image.name);
    var imagename = return_value[0];
    var ext = return_value[1];

    if(ext == "png" || ext == "jpg" || ext == "jpeg" || ext == "gif"){
        if(size <= 1024*1024){
            slider.check({},function(err,result){
            // console.log(result);
                if(result[0].image){
                    var id = result[0]._id;
                    var OldImage = result[0].image;
                    var DelPath = path.resolve()+"/public/Slider/"+OldImage;
                    fs.unlink(DelPath,function(err){

                        var UploadPath = path.resolve()+"/public/Slider/"+imagename;
                        image.mv(UploadPath,function(err){
                            Slider.update({_id: mongodb.ObjectId(id)},{image: imagename},function(err,result){

                                res.redirect("/admin/slider");
                            });
                    });
                });
                }else{
                    var UploadPath = path.resolve()+"/Slider/"+imagename;
                    image.mv(UploadPath,function(err){
                        Slider.update({_id: mongodb.ObjectId(id)},{image: imagename},function(err,result){

                            res.redirect("/admin/slider");
                        });
                });
                }

            });
        }else{
        req.flash("msg","This File Size is Too Large");
        res.redirect("/admin/slider");
        }
    }else{
        req.flash("msg","This File Type is Not Allowed");
        res.redirect("/admin/slider");
    }
});
module.exports = routes;