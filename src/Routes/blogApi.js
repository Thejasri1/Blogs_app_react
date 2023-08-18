/** @format */

import axios from "axios";

//connecting url to backend
let url = "http://localhost:8080";

const addBlogApi = (formData) => {
  try {
    const res = axios.post(url + `/addBlog`, formData);
    return res;
  } catch (e) {
    console.log(e);
  }
};

const updateBlogApi = (id, formData) => {
  try {
    const res = axios.patch(url + `/addBlog/${id}`, formData);
    return res;
  } catch (e) {
    console.log(e);
  }
};
const deleteBlogApi = (id) => {
  try {
    const res = axios.delete(url + `/${id}`);
    return res;
  } catch (e) {
    console.log(e);
  }
};
export { addBlogApi, updateBlogApi, deleteBlogApi };
