/** @format */

import { useEffect, useState } from "react";
import { addBlogApi, updateBlogApi } from "./Routes/blogApi";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

const CreateBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState(location.state);
  let actionCheck =
    location.state && location.state[1] === "update"
      ? "Update Blog"
      : "Add Blog";
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const onChangeBlog = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };
  const actionCheckFun = () => {
    if (location.state && location.state[1] === "update") {
      document.getElementById("title").value = location.state[0].title;
      document.getElementById("description").value =
        location.state[0].description;
      setFormData({
        title: location.state[0].title,
        description: location.state[0].description,
      });
    }
  };
  useEffect(() => {
    actionCheckFun();
  }, []);

  const onSubmitBlog = async () => {
    try {
      if (actionCheck === "Add Blog") {
        await addBlogApi(formData);
        navigate("/blogs", { state: token });
      } else {
        let reqId = location.state[0]._id;
        const res = await updateBlogApi(reqId, formData);
        if (res.data.message === "Blog Updated") {
          navigate("/blogs", { state: location.state[2] });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  const onBlogSubmit = (e) => {
    e.preventDefault();
  };
  const dipsplayBlog = () => {
    if (token === null) {
      navigate("/", { state: null });
    }
  };
  useEffect(() => {
    dipsplayBlog();
  }, [token]);
  return (
    <div className="accountsContainer">
      <div className="userContainer">
        <h1>
          Blo<span className="blogSpanText">g</span>
        </h1>
        <form onSubmit={onBlogSubmit}>
          <label>Enter Title :</label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            onChange={onChangeBlog}
            className="mb-2 mt-2"
          />
          <br />
          <label>Enter Description :</label>
          <br />
          <input
            type="text"
            name="description"
            id="description"
            onChange={onChangeBlog}
            className="mb-3"
          />
          <br />
          <button onClick={onSubmitBlog} className="authBtn mb-5">
            {actionCheck}
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateBlog;
