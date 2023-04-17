import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faMailBulk, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
//import "./App.css";
import { Postregister } from "../Api/Api";
const Userregister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const userData = { username, email, password, confirmpassword };

  const navigate = useNavigate();

  return (
    <div>
      <div className="container mt-5 h-100">
        <div className="d-flex justify-content-center h-100">
          <div
            className="card col-5"
            style={{ backgroundColor: "RGB(125 13 16)" }}
          >
            <div
              className="card-header Cardtop "
              style={{ backgroundColor: "black" }}
            >
              <h3 className="login-name text-light">
                <b>Register</b>
              </h3>
            </div>
            <div className="card-body">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const reg = await Postregister(userData);
                  if (reg.data.message === "email already exist") {
                    alert("Email already in use");
                  } else {
                    alert("successfully registered");
                  }
                  setEmail("");
                  setPassword("");
                  setUsername("");
                  setConfirmpassword("");
                  navigate("/userlogin");
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
                        icon={faUser}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2">
                        <b>UserName</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control ms-2"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group form-group mt-3">
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
                        <b>Confirm</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="confirmpassword"
                    name="confirmpassword"
                    aria-label="confirmpassword"
                    className="form-control ms-2"
                    placeholder="confirmpassword"
                    value={confirmpassword}
                    onChange={(e) => {
                      setConfirmpassword(e.target.value);
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
                    Register
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer" style={{ backgroundColor: "black" }}>
              <div className="d-flex justify-content-center links text-light">
                Already have an account?<Link to="/userlogin">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userregister;
