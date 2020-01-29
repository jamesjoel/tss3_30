var request = require("request");

External_URL = "http://localhost:3300/api/teacher";

var apiUsingRequest = function(callback){
    request(External_URL,{json: true},function(err,res,body){
        if(err){
            return callback(err);
        }
        return callback(body);
    });
}

module.exports.callApi = apiUsingRequest;