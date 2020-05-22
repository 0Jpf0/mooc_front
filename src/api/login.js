import axios from "./../utils/request";

const getCode = () => {
  // eslint-disable-next-line no-return-await
  return axios.get("/getCaptcha");
};
const forget = option => {
  return axios.post("/forget", { ...option });
};

export { getCode, forget };
