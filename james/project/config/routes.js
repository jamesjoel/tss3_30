var express = require("express");
var routes = express.Router();

var url = ["/profile"];

// backdoor protation code


routes.use(url, function(req, res, next){
    if(! req.session.is_user_logged_in)
    {
        res.redirect("/login");
        return;
    }
    next();

});



routes.use("/", require("../controllers/home"));
routes.use("/about", require("../controllers/about"));
routes.use("/contact", require("../controllers/contact"));
routes.use("/login", require("../controllers/login"));
routes.use("/signup", require("../controllers/signup"));
routes.use("/cart", require("../controllers/cart"));

routes.use("/profile", require("../controllers/profile"));




routes.use("/admin", require("./adminroutes"));

routes.get("/logout", function(req, res){
    req.session.destroy();
    res.redirect("/login");
    
});




routes.get("*", function(req, res){
    res.render("notfound/index", { title : "Not Found"});
});





module.exports=routes;