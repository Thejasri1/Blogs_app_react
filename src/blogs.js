/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteBlogApi } from "./Routes/blogApi";

const Blog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState(location?.state);
  const [blogsData, setBlogsData] = useState([]);

  const getAllBlogsFun = async () => {
    try {
      if (token === null) {
        navigate("/", { state: null });
      } else {
        const res = await axios.get("http://localhost:8080/blogs", {
          headers: {
            "X-Token": token,
          },
        });
        setBlogsData(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllBlogsFun();
  }, [token]);
  const onCreateBlog = () => {
    navigate("/addBlog", { state: token });
  };
  const onDeleteBlog = async (id) => {
    try {
      const res = await deleteBlogApi(id);
      if (res.data.message === "Blog is deleted") {
        getAllBlogsFun();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onEditBlog = (x) => {
    let action = "update";
    navigate("/addBlog", { state: [x, action, token] });
  };

  return (
    <div>
      <nav className="navContainer">
        <p onClick={onCreateBlog} className="navItems m-2">
          Create Blog
        </p>
        <p onClick={() => setToken(null)} className="navItems m-2">
          Log out
        </p>
      </nav>
      {blogsData?.map((x) => {
        return (
          <div className="row m-5" key={x._id}>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title title">{x.title}</h5>
                  <p className="card-text">{x.description}</p>
                  <div className="d-flex flex-direction-row justify-content-end">
                    <button
                      className="btn btn-success"
                      onClick={() => onEditBlog(x)}
                    >
                      EDIT
                    </button>
                    <button
                      className="btn btn-danger mx-3"
                      onClick={() => onDeleteBlog(x?._id)}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Blog;
