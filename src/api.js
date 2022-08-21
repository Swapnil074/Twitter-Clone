import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default axios.create({
  baseURL: "https://twitter-clone.herokuapp.com/",
  headers: {
    Accept: "applications/json",
  },
});

export const baseUrl = "https://twitter-clone.herokuapp.com/";
