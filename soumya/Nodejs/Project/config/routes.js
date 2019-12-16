var express = require("express");
var routes = express.Router();
var url = ["/profile"];
routes.use(url, function(req, res, next) {
    if (!req.session.is_user_logged_in) {
        res.redirect("/login#login");
        return;
    }
    next();
});

routes.use("/", require("../controllers/home/home"));
routes.use("/about", require("../controllers/about/about"));
routes.use("/contact", require("../controllers/contact/contact"));
routes.use("/help", require("../controllers/help/help"));
routes.use("/Signup", require("../controllers/signup/signup"));
routes.use("/login", require("../controllers/login/login"));
routes.use("/profile", require("../controllers/profile/profile"));
routes.use("/admin", require("./admin_router"));

routes.get("/logout", function(req, res) {
    req.session.destroy();
    res.redirect("/login#login");
});


routes.get("*", function(req, res) {
    res.render("notfound/index", { title: "Error 404 (Not Found)!" })
});

// console.log(routes);
module.exports = routes;