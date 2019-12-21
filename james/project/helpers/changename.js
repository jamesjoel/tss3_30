var random = require("randomstring");

module.exports=function(imageName){ // 1.jpg
    var a = random.generate(25);
    var arr = imageName.split(".");
    var ext = arr[arr.length - 1];
    var newName = a + "." + ext;
    return [newName, ext];
}