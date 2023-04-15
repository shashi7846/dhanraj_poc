import "./App.css";
import { Route, Routes } from "react-router-dom";
//import Login from "./Login";
import Userlogin from "./Userlogin";
import Userregister from "./Userregister";
import Home from "./Home";
import Navbar from "./Navbar";
import BankingStatement from "./Banking";
import Deposit from "./Deposit";

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
  return localStorage.getItem("id") ? component : <Userlogin />;
};
export default App;
