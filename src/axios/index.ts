import axios from "axios";
// import store from "@/store/index";
axios.defaults.baseURL = "/api/";

axios.interceptors.request.use(
  (req) => {
    const token = sessionStorage.getItem("token");
    if (token != null) {
      req.headers.token = token;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
