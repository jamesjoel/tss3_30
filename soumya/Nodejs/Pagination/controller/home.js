var express = require("express");
var Router = express.Router();
var Pagination = require("../model/home");

var perPageData = 100;

Router.get("/",function(req,res){
    Pagination.count(function(err,total){
        var totalPages = Math.ceil(total/perPageData);

        Pagination.search1({},perPageData,function(err,result){
            var pagedata = {
                cities : result,
                totalPages : totalPages,
                currentPage : 1,
                sNo : 0
            }
            res.render("home/index",pagedata);
        });
    });
});


Router.get("/:pageno",function(req,res){
    var pageno = req.params.pageno;
    var x = pageno-1;
    var y = x*perPageData;
    Pagination.count(function(err,total){
        var totalPages = Math.ceil(total/perPageData);

        Pagination.search2({},y,perPageData,function(err,result){
            var pagedata = {
                cities : result,
                totalPages : totalPages,
                currentPage : pageno,
                sNo : y
            }
            res.render("home/index",pagedata);
        });
    });
});


module.exports = Router; 