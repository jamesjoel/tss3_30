var express = require("express");
var routes = express.Router();



routes.use("/", require("../controllers/admin/login"));
routes.use("/dashboard", require("../controllers/admin/dashboard"));
routes.use("/category", require("../controllers/admin/category"));
routes.use("/product", require("../controllers/admin/product"));

routes.get("/logout", function(req,res){
    req.session.destroy();
    res.redirect("/");
})

module.exports = routes;