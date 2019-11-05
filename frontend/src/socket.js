import io from "socket.io-client";

const SOCKET_IO_URL = process.env.BACKEND_HOST;
const socket = io(SOCKET_IO_URL);

socket.on("connect", data => {
    socket.emit("join", () => "On Connect Do Something with event join");
});

socket.on("newMessage", data => {
    // On 'newMessage' do something
});

module.exports = socket;