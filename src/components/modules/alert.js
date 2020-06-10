import alertComponent from "./Alert.vue";
const Alert = {};
Alert.install = function(Vue, options) {
  const AlertConstructor = Vue.extend(alertComponent);
  const instance = new AlertConstructor();
  instance.$mount(document.createElement("div"));
  document.body.appendChild(instance.$el);
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function() {
    // 逻辑...
  };

  // 4. 添加实例方法
  Vue.prototype.$alert = function(msg) {
    // 逻辑...
    instance.msg = msg;
    instance.isShow = true;
    instance.type = "alert";
  };
  Vue.prototype.$confirm = function(msg, success, cancel) {
    // 逻辑...
    instance.msg = msg;
    instance.isShow = true;
    instance.type = "confirm";
    if (typeof success !== "undefined") {
      instance.success = success;
    }
    if (typeof cancel !== "undefined") {
      instance.cancel = cancel;
    }
  };
};

export default Alert;
