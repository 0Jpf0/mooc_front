import axios from "axios";
import errHandle from "./errorHandle";
class httpRequest {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      timeout: 10000
    };
    return config;
  }
  interceptors(instance) {
    instance.interceptors.request.use(
      config => {
        console.log(config);
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      res => {
        console.log(res);
        if (res.status === 200) {
          return Promise.resolve(res.data);
        } else {
          return Promise.reject(res);
        }
      },
      error => {
        debugger;
        errHandle(error);
        return Promise.reject(error);
      }
    );
  }
  request(options) {
    const instance = axios.create();
    const newOptions = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(newOptions);
  }
  get(url, config) {
    const options = Object.assign(
      {
        url: url,
        method: "get"
      },
      config
    );
    return this.request(options);
  }
  post(url, data) {
    return this.request({
      url: url,
      method: "get",
      data: data
    });
  }
}
export default httpRequest;
