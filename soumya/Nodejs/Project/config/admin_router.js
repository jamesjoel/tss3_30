var express = require("express");
var routes = express.Router();
var url = ["/dashboard", "/product", "/category"];

routes.use(url, function(req, res, next) {


    if (!req.session.is_admin_logged_in) {
        res.redirect("/admin");
        return;
    }
    next();
});

routes.use("/product", require("../controllers/admin/product"));
routes.use("/", require("../controllers/admin/login"));
routes.use("/category", require("../controllers/admin/category"));
routes.use("/dashboard", require("../controllers/admin/dashboard"));


routes.get("/logout", function(req, res) {
    req.session.destroy();
    res.redirect("/");
});

module.exports = routes;