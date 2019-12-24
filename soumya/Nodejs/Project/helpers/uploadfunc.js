var random = require("randomstring");
module.exports = function(image_name){
    var randomstring = random.generate(25);
    var arr = image_name.split(".");
    var extention = arr[arr.length-1];
    var newName = randomstring+"."+extention;
    return [newName,extention];
}
