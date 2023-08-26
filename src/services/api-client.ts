import axios, { CanceledError } from "axios";
const domain = window.location.hostname;
let baseURL;
if (domain === "localhost") {
  baseURL = "http://127.0.0.1:8000/newApi/localhost";
} else {
  baseURL = "newApi/" + domain;
}

export default axios.create({
  baseURL: baseURL,
});

export { CanceledError };
