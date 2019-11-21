import io from 'socket.io-client';
import '../config/config';
import {backend_ip, backend_port} from "../config/config";

const SOCKET_IO_URL = backend_ip + backend_port;
export const socket = io(SOCKET_IO_URL);

socket.on("message", (message) => {
    console.log(message);
    console.log(`My ID: ${socket.id}`);
});

socket.on("start", () => {
    console.log(`My ID: ${socket.id}`);
});

socket.on("pause", () => {
    console.log(`My ID: ${socket.id}`);
});

socket.on("testResponse", (message) => {
    console.log(message);
});

socket.on("resume", () => {
    console.log(`My ID: ${socket.id}`);
});