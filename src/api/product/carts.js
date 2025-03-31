import api from "@/api/index.js";

const { http } = api;

export default {
  baseUrl: "http://localhost:8001",
  url: "api/cart",
  http,

  addToCart(productId, quantity = 1) {
    return this.http(this.baseUrl).post(this.url, {
      product_id: productId,
      quantity: quantity,
    });
  },
};
