var express = require("express");
var app = express();
var server = require("http").Server(app);
/*var socketIo = require("socket.io");
var io = socketIo(server);*/
var io = require("socket.io")(server);
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.get("/",function(req,res){
    res.render("index");
});

io.on("connection",function(socket){
    // console.log(socket);
  /*Recieve*/  socket.on("send",function(data ){
        /* Through */ io.emit("SendToClient",data);
             });
});

server.listen(3000,function(){
    console.log("server running");
});