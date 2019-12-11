var express = require("express");
var routes = express.Router();

routes.get("/info", function (req, res) {
    var pagedata = { pagename: "contact/index", title : "Contact" };
    res.render("layout", pagedata);
});
// routes.get("/info/more", function (req, res) {
//     var pagedata = { pagename: "contact/index", title: "Contact" };
//     res.render("layout", pagedata);
// });


module.exports=routes;