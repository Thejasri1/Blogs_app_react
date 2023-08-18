/** @format */

import axios from "axios";

//connecting url to backend
let url = "http://localhost:8080";

//Register api call
const registerApi = (formData) => {
  try {
    const res = axios.post(url + "/register", formData);
    return res;
  } catch (e) {
    console.log(e);
  }
};

//Login api call
const loginApi = (formData) => {
  try {
    const res = axios.post(url + "/login", formData);
    return res;
  } catch (e) {
    console.log(e);
  }
};
export { registerApi, loginApi };
