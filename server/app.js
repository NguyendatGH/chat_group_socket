const express = require("express");
const http = require("http");
const Server = require("socket.io").Server;

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("chat", (chat) => {
    io.emit("chat", chat);
  });

  socket.on("newMessage", (msg) => {
    console.log("New message received:", msg); 
    io.emit("message", msg); 
  });

  socket.on("disconnect", () =>{
    console.log("disconnect!");
  })
});

server.listen("3001", () =>{
    console.log("running on port 3001 ");
})
