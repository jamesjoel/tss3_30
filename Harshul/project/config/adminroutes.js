var express = require("express");
var routes = express.Router();

var url =["/dashboard", "/product", "/categories"];

routes.use(url,function(req,res,next){
    if(! req.session.is_admin_logged_in)
    {
        res.redirect("/admin");
        return;
    }
    next();
});







routes.use("/", require("../controller/admin/login"));
routes.use("/product",require("../controller/admin/product"));
routes.use("/dashboard",require("../controller/admin/dashboard"));
routes.use("/categories",require("../controller/admin/categories"));

routes.get("/logout",function(req,res){
    req.session.destroy();
    res.redirect("/");
});


module.exports = routes;