import axios from "./../utils/request";
/**
 * 获取图形验证码
 * @param {*} sid 唯一标识
 */
const getCode = sid => {
  // eslint-disable-next-line no-return-await
  return axios.get("/public/getCaptcha", {
    params: {
      sid: sid
    }
  });
};
/**
 * 忘记密码
 * @param {*} option
 */
const forget = option => {
  return axios.post("/forget", { ...option });
};
/**
 * 用户登录
 * @param {*} loginInfo 用户名。密码等参数
 */
const login = loginInfo => {
  return axios.post("/login", { ...loginInfo });
};

export { getCode, forget, login };
