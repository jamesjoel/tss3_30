var mod_express = require("express");
var exp = mod_express();

exp.set("view engine", "ejs");

exp.use(mod_express.static(__dirname + "/public"));


exp.get("/", function(req, res) {

    var data = [{
            month: "January",
            days: 31,
            city: "indore"
        },
        {
            month: "February",
            days: 29 + " Leep Year",
            city: "ujjain"
        },
        {
            month: "March",
            days: 31,
            city: "bhopal"
        },
        {
            month: "April",
            days: 30,
            city: "indore"
        },
        {
            month: "May",
            days: 31,
            city: "indore"
        },
        {
            month: "June",
            days: 30,
            city: "indore"
        },
        {
            month: "July",
            days: 31,
            city: "indore"
        },
        {
            month: "August",
            days: 31,
            city: "indore"
        },
        {
            month: "September",
            days: 30,
            city: "indore"
        },
        {
            month: "Octomber",
            days: 31,
            city: "indore"
        },
        {
            month: "November",
            days: 30,
            city: "indore"
        },
        {
            month: "December",
            days: 31,
            city: "indore"
        }
    ];
    var object = {
        pagename: "home/index",
        title: "Home",
        data: data
    };
    res.render("layout", object);
});



exp.get("/FindLeepYear", function(req, res) {
    var object = {
        pagename: "find_leep_year/index",
        title: "Find Leep Year"
    };
    res.render("layout", object);
});


exp.listen(3000, function() {
    console.log("Your Server is running");
});