module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: 0,
    semi: 0,
    "comma-dangle": 0, // 对象字面量项尾不能有逗号
    "space-before-function-paren": [0, "always"] // 函数定义时括号前面要不要有空格
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
