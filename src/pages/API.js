import axios from "axios";

export default axios.create({
  baseURL: "http://31.220.50.154:5000",
  responseType: "json",
});
