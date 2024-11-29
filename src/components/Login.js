import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  //   State for Data storage

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  //   Data Bind()
  const handleState = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  //   Login()
  const LoginUser = (e) => {
    e.preventDefault();
    if (userData.email === "aameerdev@gmail.com" && userData.password === "Aameer@123") {
      navigate("/Admin-panel"); 
    } else {
      alert("Wrong Credentials")
    }
  };

  return (
    <React.Fragment>
      <div id="LoginBase">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="loginForm">
              <h1 className="headingText">Login Form</h1>
              <form onSubmit={LoginUser}>
                <div className="formBox">
                  <label className="form-label">Email</label>
                  <input
                    name="email"
                    value={userData.email}
                    onChange={handleState}
                    required
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="formBox">
                  <label className="form-label">Password</label>
                  <input
                    name="password"
                    value={userData.password}
                    onChange={handleState}
                    required
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <input type="submit" className="buttonSubmit" value="Login" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
