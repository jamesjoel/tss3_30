var express = require("express");
var app = express();
var server = require("http").Server(app);
/*var socketIo = require("socket.io");
var io = socketIo(server);*/
var io = require("socket.io")(server);





app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));
app.get("/", function(req, res){
    res.render("index");
});

io.on("connection", function(socket){
        
        socket.on("send", function(data){
            io.emit("sendToClient", data);
            
        });
});
<<<<<<< HEAD




=======
>>>>>>> 2f13a29878cbe187038a35ee581e049a1a854d91
server.listen(3000, function(){
    console.log("server running");
});