var express = require("express");
var ghup = express();

ghup.set("view engine","ejs");

ghup.get("/",function(res,res) {
    var punk=[
        {
            name : "Pavan",
            age: 43,
            contact:3636366387,
            city:"surat"
        },

        {
            name : "Gopal",
            age: 35,
            contact :3353246487,
            city:"panipat"
        },

        {
            name : "ruby",
            age: 63,
            contact :3636366387,
            city:"banglore"
        }



    ];
    var obj={ info: punk}
    res.render("Focus",obj);
});


ghup.listen(4000,function()
{
    console.log("chal foot le baye");
});