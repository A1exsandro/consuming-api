import axios from "axios";
import md5 from "md5";

const publicKey = '4b7d4baa703ff3c92befb74bdf4b3adb';
const privateKey = 'b6882a945927304a7826dbce5f121fb881cf9d5f';
const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
    params: {
        apikey: publicKey,
        ts: time,
        hash: hash
    },
});

export default api;