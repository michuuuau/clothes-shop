import axios from "axios";

const restClient = axios.create({
  baseURL: "http://localhost:8081/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

const getProducts = (category) => {
  return restClient.get("/getProducts", {
    params: {
      category,
    },
  });
};

export default {
  getProducts,
};
