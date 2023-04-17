import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Postdeposit } from "../Api/Api";

const Deposit = () => {
  const [deposit, setDeposit] = useState("");

  // const depositdata = { deposit };
  const Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (deposit < 100) {
      alert("Deposit amount should be at least $100.");
    } else {
      Postdeposit(deposit);
      Navigate("/banking");
    }
  };

  return (
    <div>
      <div className="container mt-5 h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="card col-5">
            <div
              className="card-header Cardtop "
              style={{ backgroundColor: "black" }}
            >
              <h3 className="login-name text-light">
                <b>Deposit Amount</b>
              </h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text text-white"
                      style={{ minWidth: "150px" }}
                    >
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faMoneyBill}
                        style={{
                          fontSize: "1.75em",
                          color: "black",
                        }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2" for="EmailId">
                        <b>Deposit</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="number"
                    name="number"
                    aria-label="number"
                    className="form-control ms-2"
                    placeholder="Deposit amount"
                    value={deposit}
                    onChange={(e) => {
                      setDeposit(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    value="Deposit"
                    name="Deposit"
                    aria-label="Deposit"
                    className="btn float-right  btn-dark mt-2 px-4"
                  >
                    Deposit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
