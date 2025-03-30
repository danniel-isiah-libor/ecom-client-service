import axios from "axios";

const http = (baseUrl) => {
  const http = axios.create({ baseURL: baseUrl });

  http.interceptors.request.use((config) => {
    config.headers.Accept = "application/json";

    return config;
  });

  return http;
};

export default {
  //
};
