let clients = [];

module.exports = function configSocket(io) {
  io.on("connection", socket => {
    console.log(`User with ID ${socket.id} has connected.`);
    // Add to Active-Clients
    clients.push(socket);

    // Put Socket in Room for his Topic
    socket.on("join", function(data) {
      const joinCode = data.joinCode;
      socket.join(`${joinCode}`);
      console.log(joinCode);

      console.log(socket.rooms);
    });

    // Game-Controls
    socket.on("start", function(data) {
      const joinCode = data.joinCode;
      io.to(`${joinCode}`).emit("start");
      console.log("Received Start");
    });

    socket.on("pause", function(data) {
      const joinCode = data.joinCode;
      io.to(`${joinCode}`).emit("pause");
      console.log("Received Pause");
    });

    socket.on("resume", function(data) {
      const joinCode = data.joinCode;
      io.to(`${joinCode}`).emit("resume");
      console.log("Received Resume");
    });

    // Remove from Active-Clients
    socket.on("disconnect", () => {
      let index = clients.indexOf(socket);
      try {
        clients.splice(index, 1);
        console.log(`User with ID ${socket.id} has disconnected.`);
        console.log(`Current Clients ${clients.length}`);
      } catch (exception) {
        console.log(exception.message);
      }
    });
  });
};
