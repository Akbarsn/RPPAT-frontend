import axios from "axios";

export default axios.create({
  baseURL: "http://45.80.152.183:5000/",
  responseType: "json",
});
