/** @format */
import { useState } from "react";
import { registerApi } from "./Routes/userApi";
import "./App.css";

const Register = () => {
  const [validationMessage, setValidationMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  //onChange form input data
  const onChangeFormData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData((ps) => ({ ...ps, [name]: value }));
  };

  //on submitting form data into the db
  const onSubmitFormData = async () => {
    try {
      const res = await registerApi(formData);
      setValidationMessage("success");
    } catch (e) {
      console.log(e);
      setValidationMessage(e.response.data.message);
    }
  };

  //preventing form data after form submit
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {validationMessage === "success" ? (
        <p style={{ color: "green" }}>Registerd successfully please login !</p>
      ) : (
        <p style={{ color: "red" }}>{validationMessage}</p>
      )}
      <form onSubmit={onFormSubmit}>
        <label>User name :</label>
        <br />
        <input type="text" name="username" onChange={onChangeFormData} />
        <br />
        <label>Email :</label>
        <br />
        <input type="text" name="email" onChange={onChangeFormData} />
        <br />
        <label>Password :</label>
        <br />
        <input type="password" name="password" onChange={onChangeFormData} />
        <br />
        <label>Confirmpassword :</label>
        <br />
        <input
          type="password"
          name="confirmpassword"
          onChange={onChangeFormData}
        />
        <br />
        <button className="authBtn" onClick={onSubmitFormData}>
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
