var random = require("randomstring");

module.exports=function(imagename){
    var a = random.generate(25);
    var arr = imagename.split(".");
    var exit = arr[arr.length - 1]
    var newname = a + "." + exit;
    return[newname,exit];
}