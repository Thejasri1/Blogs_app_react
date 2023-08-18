/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Register from "./register";
import Login from "./login";
import Blog from "./blogs";
import CreateBlog from "./blogForm";

/** @format */
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Account />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
        <Route path="/addBlog" element={<CreateBlog />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
