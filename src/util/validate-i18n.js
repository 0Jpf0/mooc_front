import { configure, extend } from "vee-validate";
import { required, email, min, max, length } from "vee-validate/dist/rules";
import i18n from "./i18n";

configure({
  defaultMessage: (field, values) => {
    values._field_ = i18n.t(`fields.${field}`);
    return i18n.t(`validation.${values._rule_}`, values);
  }
});
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
