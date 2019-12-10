import { localize, extend } from 'vee-validate'

const dictionary = {
  'zh-CN': {
    messages: {
      // required: field => '请输入' + field,
      // email: () => '请输入正确的邮箱格式',
      // min: () => '不符合最小长度要求',
      // length: () => '验证码长度要求为4'
    },
    fields: {
      password: {
        required: '请输入密码',
        min: '不符合最小长度要求',
        max: '不符合最大长度要求'
      },
      rePassword: {
        required: '请输入密码',
        min: '不符合最小长度要求',
        max: '不符合最大长度要求'
        // confirmPassword: '两次密码输入不一致'
      },
      name: {
        required: '请输入昵称',
        min: '不符合最小长度要求'
      },
      username: {
        required: '请输入用户名',
        email: '请输入正确的邮箱格式'
      },
      code: {
        required: '请输入验证码',
        length: '验证码长度要求为4'
      }
    }
  }
}
extend('confirmPassword', { params: ['target'],
  validate (value, { target }) {
    console.log(value, target)
    return value === target
  },
  message: '两次密码输入不一致'
})
localize(dictionary)
