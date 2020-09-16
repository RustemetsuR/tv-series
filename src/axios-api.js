import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.tvmaze.com/search/shows?q="
});

export default instance;