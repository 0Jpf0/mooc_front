import { localize, extend } from "vee-validate";
import { required, email, min, max, length } from "vee-validate/dist/rules";
import zh from "vee-validate/dist/locale/zh_CN.json";
const dictionary = {
  names: {
    password: "密码",
    rePassword: "确认密码",
    username: "用户名",
    name: "昵称",
    code: "验证码"
  },
  messages: {
    ...zh.messages,
    required: "请输入{_field_}",
    email: "请输入正确的邮箱格式",
    min: "不符合最小长度要求",
    max: "不符合最大长度要求",
    length: "验证码长度要求为4",
    confirmPassword: "两次密码输入不一致"
  },
  fields: {
    username: {
      required: "请输入用户名",
      email: "请输入正确的邮箱格式!!!!!!!"
    }
  }
};
extend("required", required);
extend("email", email);
extend("min", min);
extend("max", max);
extend("length", length);
extend("confirmPassword", {
  params: ["target"],
  validate(value, { target }) {
    console.log(value, target);
    return value === target;
  },
  message: "两次密码输入不一致"
});
localize("zh_CN", dictionary);
