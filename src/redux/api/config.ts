import axios from "axios";

const baseURL = "http://localhost:4040/api/ecommerce/v1/";

const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const $axios = axios.create({
  baseURL,
  headers: config.headers,
  withCredentials: config.withCredentials,
});

export default $axios;
