import io from 'socket.io-client';

const SOCKET_IO_URL = "http://localhost:3001";
export const socket = io(SOCKET_IO_URL);