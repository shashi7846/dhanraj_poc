import React from "react";
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <Link class="navbar-brand" to="/">
          <h1 className="navhead" style={{ marginLeft: "100px" }}>
            {" "}
            <b className="title text-light" style={{ fontWeight: "900" }}>
              D-Bank
            </b>
          </h1>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav" style={{ marginLeft: "900px" }}>
            {/* <li className="nav-item">
              <Link className="btn btn-dark" to="/userlogin">
                Login
              </Link>
            </li>
            <li className="nav-item  " style={{ marginLeft: "20px" }}>
              <Link className="btn btn-dark" to="/userregister">
                Register
              </Link>
            </li> */}
            {window.localStorage.getItem("app_token") ? (
              <>
                <li className="nav-item">
                  <Link className="btn btn-dark m-2" to="/deposit">
                    Deposit
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-dark m-2" to="/banking">
                    Withdraw
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn btn-dark m-2"
                    to="/userlogin"
                    onClick={() => {
                      window.localStorage.removeItem("app_token"); //removing the jwt token for logging out
                      Navigate(`/userlogin`);
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="btn btn-dark" to="/userlogin">
                    Login
                  </Link>
                </li>
                <li className="nav-item  " style={{ marginLeft: "20px" }}>
                  <Link className="btn btn-dark" to="/userregister">
                    Register
                  </Link>
                </li>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
