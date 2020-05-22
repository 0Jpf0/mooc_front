import Vue from "vue";
import VueI18n from "vue-i18n";
import zh from "vee-validate/dist/locale/zh_CN.json";
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "zh_CN",
  messages: {
    zh_CN: {
      fields: {
        password: "密码",
        rePassword: "确认密码",
        username: "用户名",
        name: "昵称",
        code: "验证码"
      },
      validation: {
        ...zh.messages,
        required: "请输入{_field_}"
      }
    }
  }
});
export default i18n;
