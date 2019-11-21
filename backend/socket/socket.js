let clients = [];

module.exports = function configSocket(io) {
    io.on("connection", socket => {
        console.log(`User with ID ${socket.id} has connected.`);
        // Add to Active-Clients
        clients.push(socket);

        // Put Socket in Room for his Topic
        socket.on("joinTopic", function (data) {
            socket.join(`${data.joinCode}`);
        });

        // Game-Controls
        socket.on("start", function (data) {
            io.to(`${data.joinCode}`).emit("start");
        });

        socket.on("pause", function (data) {
            io.to(`${data.joinCode}`).emit("pause");
        });

        socket.on("resume", function (data) {
            io.to(`${data.joinCode}`).emit("resume");
        });

        // Remove from Active-Clients
        socket.on("disconnect", () => {
            let index = clients.indexOf(socket);
            try {
                clients.splice(index, 1)
                console.log(`User with ID ${socket.id} has disconnected.`);
                console.log(`Current Clients ${clients.length}`)
            } catch (exception) {
                console.log(exception.message);
            }
        });
    });
};
