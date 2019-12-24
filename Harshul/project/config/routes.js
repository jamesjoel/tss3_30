var express = require("express");
var routes = express.Router();
var url =["/profile"];

routes.use(url,function(req,res,next){
    if(! req.session.is_user_logged_in)
    {
        res.redirect("/login")
        return;
    }
    next();
});






routes.use("/", require("../controller/home"));
routes.use("/about", require("../controller/about"));
routes.use("/signup", require("../controller/signup"));
routes.use("/login", require("../controller/login"));
routes.use("/OfferAndSales", require("../controller/offer"));
routes.use("/admin", require("./adminroutes"));
routes.use("/profile", require("../controller/profile"));
routes.use("/edit", require("../controller/edit"));
routes.use("/cart", require("../controller/cart"));

// routes.use("/profile",require("../controllers/profile"));
// routes.use("/admin", require("./adminroutes"));

routes.get("/logout",function(req,res){
req.session.destroy();
res.redirect("/login");
});

routes.get("*",function(req,res){
    res.render("notfound/index",{title: "Not Found"});
});


module.exports=routes;