import axios, { CanceledError } from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const domain = window.location.hostname;
let baseURL;
if (domain === "localhost" || domain === "127.0.0.1") {
  baseURL = "http://127.0.0.1:8000/newApi/";
} else {
  baseURL = "/newApi/";
}

export default axios.create({
  baseURL: baseURL,
  /*   headers: {
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFToken",
    withCredentials: true,
  }, */
});

export { CanceledError };
