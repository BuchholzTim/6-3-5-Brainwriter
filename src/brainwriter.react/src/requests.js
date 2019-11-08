require('dotenv').config();
const APIURL = process.env.BACKEND_HOST;
const axios = require('axios');

export const getModerators = () => axios.get(`${APIURL}/moderators/moderators`);
export const getRooms = () => axios.get(`${APIURL}/rooms/rooms`);