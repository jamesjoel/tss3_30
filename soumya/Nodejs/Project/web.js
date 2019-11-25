var express = require("express");
var web = express();

web.set("view engine", "ejs");
web.use(express.static(__dirname + "/public"));

web.get("/", function(req, res) {
    var pagedata = {
        pagename: "home/index",
        title: "ShoppingMall.com",
    }
    res.render("layout", pagedata);
});

web.get("/About", function(req, res) {
    var pagedata = {
        pagename: "about/index",
        title: "About Us",
    }
    res.render("layout", pagedata);
});

web.get("/Contact", function(req, res) {
    var pagedata = {
        pagename: "contact/index",
        title: "Contact Page",
    }
    res.render("layout", pagedata);
});


web.get("/Help", function(req, res) {
    var pagedata = {
        pagename: "help/index",
        title: "Help Page",
    }
    res.render("layout", pagedata);
});


web.listen(3000, function() {
    console.log("Server running");
});