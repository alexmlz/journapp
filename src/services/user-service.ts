import apiClient from "./api-client";
/* import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/newApi/test",

}); */

//const tokenKey = "token";

export const register = (user: any, setCurrentUser: any) => {
  return apiClient.post("/register/", user).then(() => {
    apiClient.post("/logintest/", user).then(() => {
      setCurrentUser(true);
    });
  });
};

export const login = (loginDetails: any, setCurrentUser: any) => {
  return apiClient.post("/logintest/", loginDetails).then(() => {
    setCurrentUser(true);
  });
  //localStorage.setItem(tokenKey, response.data.token);
  //localStorage.setItem("user", JSON.stringify(response.data));
};

export const getUser = (setLoggedIn: any) => {
  return apiClient
    .get("/user/")
    .then(() => {
      setLoggedIn(true);
    })
    .catch(() => {
      setLoggedIn(false);
    });
};
