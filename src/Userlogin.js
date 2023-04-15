import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GetuserbyEmail, Postlogin } from "./Api/Api";
const Userlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = { email, password };
  const Navigate = useNavigate();
  return (
    <>
      <div className="container mt-5 h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="card col-5">
            <div
              className="card-header Cardtop "
              style={{ backgroundColor: "black" }}
            >
              <h3 className="login-name text-light">
                <b>Login</b>
              </h3>
            </div>
            <div className="card-body">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    const logindata = await Postlogin(userData);
                    console.log(logindata);
                    window.localStorage.setItem(
                      "app_token",
                      logindata.data.token
                    );
                    const token = logindata.data.token;

                    //checking if token is present then go to next page otherwise stay in same page
                    if (token) {
                      const users = await GetuserbyEmail(email);
                      console.log(users.data._id);
                      Navigate("/deposit");
                    } else {
                      alert("Email or password is incorrect");
                      Navigate(`/userlogin`);
                    }
                  } catch (error) {
                    console.log(error);
                  }
                  setEmail("");
                  setPassword("");
                }}
              >
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text text-white"
                      style={{ minWidth: "150px" }}
                    >
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faMailBulk}
                        style={{
                          fontSize: "1.75em",
                          color: "black",
                        }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2" for="EmailId">
                        <b>Email Id</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    aria-label="email"
                    className="form-control ms-2"
                    placeholder="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text text-white "
                      style={{ minWidth: "150px" }}
                    >
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faKey}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2">
                        <b>Password</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    aria-label="password"
                    className="form-control ms-2"
                    placeholder="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    value="Login"
                    name="Login"
                    aria-label="Login"
                    className="btn float-right  btn-dark mt-2 px-4"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer" style={{ backgroundColor: "black" }}>
              <div className="d-flex justify-content-center links text-light">
                Don't have an account?<Link to="/userregister">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userlogin;
