/** @format */

import { useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./login";
import { useState } from "react";
import Register from "./register";

const Account = () => {
  const [selectedAcc, setSelectedAcc] = useState("login");

  const ondisplayAccType = (type) => {
    if (type === "login") {
      setSelectedAcc("login");
    } else {
      setSelectedAcc("register");
    }
  };

  return (
    <div className="accountsContainer">
      <div className="userContainer">
        <h1>
          Blo<span className="blogSpanText">g</span>
        </h1>
        {selectedAcc === "login" ? (
          <div>
            <Login />
            <p>or</p>
            <p onClick={() => ondisplayAccType("register")} className="accText">
              Create account
            </p>
          </div>
        ) : (
          <div>
            <Register />
            <p>or</p>
            <p onClick={() => ondisplayAccType("login")} className="accText">
              Already have account login
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Account;
