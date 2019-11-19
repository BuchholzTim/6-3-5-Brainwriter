let clients = [];

module.exports = function configSocket(io) {
    io.on("connection", socket => {
        console.log("A user has connected");
        clients.push(socket);
        // Log Unique ID per Client-Socket
        console.log(`Neue ID: ${socket.id}`);

        io.emit("message", "emitted by IO");
        socket.emit("message", "emitted by socket");

        console.log("Aktuelle Client-IDs");
        clients.forEach((client) => {
            console.log((client.id));
        });

        if (clients.length > 1) {
            console.log(`Anzahl clients ${clients.length}`);
            let second_to_last_id = clients[clients.length - 2].id;
            console.log(`Vorletzte ID: ${second_to_last_id}`);
            socket.broadcast.to(second_to_last_id).emit("message", "from broadcast");
        }

        socket.on("disconnect", (socket) => {
            console.log(`Client with ID ${socket.id} disconnected`);
        });
    });
};