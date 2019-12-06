import { localize } from 'vee-validate'

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
        min: '不符合最小长度要求'
      },
      name: {
        required: '请输入账号',
        email: '请输入正确的邮箱格式'
      },
      code: {
        required: '请输入验证码',
        length: '验证码长度要求为4'
      }
    }
  }
}

localize(dictionary)
