import io from "socket.io-client";
import store from "../redux/store";
import { SET_TIME, START_ROUND } from "../redux/actions/types";

const setTimeStopped = (stopped) => {
  store.dispatch({
    type: SET_TIME,
    payload: {
      timeIsStopped: stopped,
    },
  });
};

const startRound = () => {
  store.dispatch({
    type: START_ROUND,
    payload: {
      roundStarted: true,
    },
  });
};

const SOCKET_IO_URL =
  process.env.REACT_APP_BACKEND_IP + process.env.REACT_APP_BACKEND_PORT;
export const socket = io(SOCKET_IO_URL);

socket.on("start", () => {
  console.log("Received Start");
  startRound();
});

socket.on("pause", () => {
  console.log("Received Pause");
  setTimeStopped(true);
});

socket.on("resume", () => {
  console.log("Received Resume");
  setTimeStopped(false);
});

export const emitStart = (joinCode) => {
  socket.emit("start", { joinCode: joinCode });
};
export const emitPause = (joinCode) => {
  setTimeStopped(true);
  socket.emit("pause", { joinCode: joinCode });
};
export const emitResume = (joinCode) => {
  setTimeStopped(false);
  socket.emit("resume", { joinCode: joinCode });
};

export const emitJoin = (joinCode) => {
  socket.emit("join", { joinCode: joinCode });
};
