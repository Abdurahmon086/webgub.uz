// "use client";
// import useLocalStorage from "@/hooks/useLocalStorage";
import axios from "axios";

// let [token ,setToken] = useLocalStorage("token","");

if (typeof window !== "undefined") {
  var token = localStorage.getItem("token");
}
// const token = localStorage.getItem("token");    
export const request = axios.create({
  baseURL: "https://api.webhub.uz/api/v1",
  timeout: 15000,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});
