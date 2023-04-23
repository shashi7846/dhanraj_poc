import React, { useEffect, useState } from "react";
import { Getdeposit } from "../Api/Api";

const Home = () => {
  const [balance, setBalance] = useState("");
  useEffect(() => {
    Getdeposit().then((data) => {
      console.log(data);
      setBalance(data.data.user.balance);
    });
  }, []);
  return (
    <>
      <h1 className="text-light" style={{ margin: "200px" }}>
        <b>Welcome to D-Bank</b>
        <br />
        <label>
          <h1 style={{ color: "white" }}>Your Current balance:{balance}</h1>
        </label>
      </h1>
    </>
  );
};

export default Home;
