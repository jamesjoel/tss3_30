var mod_express = require("express");
var exp = mod_express();

exp.set("view engine", "ejs");



exp.get("/", function (req, res) {

    var data = [
        {
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

    // var func = function () {
    //     for (var year = 2020; year <= 2030; year++) {
    //         if (year % 4 == 0) {
    //             console.log(year+" Leep Year");
    //         } else {
    //             console.log(year);

    //         }


    //     }
    // }; var Years = func();


    var object = {
        data: data,
        // Years: Years
    }
    res.render("home", object);
});

exp.get("/FindLeepYear",function(req,res){
    res.render("find_leep_year");
});


exp.listen(3000, function () {
    console.log("Your Server is running");
});

