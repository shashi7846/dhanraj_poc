import "./App.css";
import { Route, Routes } from "react-router-dom";
//import Login from "./Login";
import Userlogin from "./login/Userlogin";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import BankingStatement from "./banking/Banking";
import Deposit from "./deposit/Deposit";
import Userregister from "./register/Userregister";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userregister" element={<Userregister />} />
        <Route path="/userlogin" element={<Userlogin />} />
        <Route
          path="/banking"
          element={<ProtectedRoute component={<BankingStatement />} />}
        />
        <Route
          path="/deposit"
          element={<ProtectedRoute component={<Deposit />} />}
        />
      </Routes>
    </div>
  );
}

const ProtectedRoute = ({ component }) => {
  return window.localStorage.getItem("app_token") ? component : <Userlogin />;
};
export default App;
