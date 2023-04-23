import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { postwithdraw } from "../Api/Api";

function BankingStatement() {
  const [userId, setUserId] = useState("");
  const [balance, setBalance] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const handleChangeUser = (event) => {
    setUserId(event.target.value);
  };

  const handleChangeWithdraw = (event) => {
    setWithdrawAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = parseFloat(withdrawAmount);
    if (amount > balance) {
      alert("Insufficient funds");
    } else if (balance - amount < 100) {
      alert("You must keep at least $100 in your account");
    } else {
      //postwithdraw(Number(withdrawAmount));
      postwithdraw({
        withdraw: Number(withdrawAmount),
        email: window.localStorage.getItem("email"),
      });
      setWithdrawAmount("");
    }
  };

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
                <b>Banking Statement</b>
              </h3>
            </div>
            <h5>
              <p>Please withdraw less than 90% of your available balance</p>
            </h5>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text text-white "
                      style={{ minWidth: "150px" }}
                    >
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faUnlock}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2">
                        <b>Withdraw</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="number"
                    name="number"
                    aria-label="number"
                    className="form-control ms-2"
                    placeholder="Withdraw Amount"
                    value={userId}
                    onChange={handleChangeUser}
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
                    Withdraw
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BankingStatement;
