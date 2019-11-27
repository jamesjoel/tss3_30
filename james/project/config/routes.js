var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/home"));
routes.use("/about", require("../controllers/about"));
routes.use("/contact", require("../controllers/contact"));
routes.use("/login", require("../controllers/login"));
routes.use("/signup", require("../controllers/signup"));


routes.get("*", function(req, res){
    res.render("notfound/index", { title : "Not Found"});
});



module.exports=routes;