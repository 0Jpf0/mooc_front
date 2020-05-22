import httpRequest from "./axios";
import config from "../config/index";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? config.baseUrl.dev
    : config.baseUrl.prod;
// eslint-disable-next-line new-cap
const axios = new httpRequest(baseUrl);
export default axios;
