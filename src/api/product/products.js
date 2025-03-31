import api from "@/api/index.js";

const { http } = api;

export default {
  baseUrl: "http://localhost:8001",
  url: "api/products",
  http,

  getProducts() {
    return this.http(this.baseUrl).post(this.url);
  },
};
