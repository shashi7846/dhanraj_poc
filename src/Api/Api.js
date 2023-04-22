import axios from "axios";

export function Postlogin(data) {
  return axios.post("http://localhost:5000/login", data);
}

export function Postregister(data) {
  return axios.post("http://localhost:5000/register", data);
}
export function GetuserbyEmail(id) {
  return axios.get(`http://localhost:5000/user/${id}`);
}

export function Postdeposit( data) {
  // posting deposit details with particular id
  return axios.post(`http://localhost:5000/deposit/${window.localStorage.getItem("_id")}`, data);
}
