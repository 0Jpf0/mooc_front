<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">手机/邮箱</label>
          <div class="layui-input-inline">
            <input type="text" name="name" v-model="name" v-validate="'required|email'" placeholder="请输入用户名" autocomplete="off"
                   class="layui-input">
          </div>
          <div class="error layui-form-mid">{{errors.first('name')}}</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-inline">
            <input type="password" name="password" v-model="password" v-validate="'required|min:6'" placeholder="请输入密码" autocomplete="off"
                   class="layui-input">
          </div>
          <div class="error layui-form-mid">{{errors.first('password')}}</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input type="text" name="code" v-model="code" v-validate="'required|length:4'" placeholder="请输入验证码" autocomplete="off"
                   class="layui-input">
          </div>
          <div class="error layui-form-mid">{{errors.first('code')}}</div>
          <div class="layui-form-mid layui-word-aux svg" v-html="svg"
          @click="getCaptcha">辅助文字</div>
        </div>
        <button type="button" class="layui-btn">确认登录</button>
        <a href="http://www.layui.com" class="mooc-link">忘记密码</a>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      svg: '',
      name: '',
      password: '',
      code: ''
    }
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3003/getCaptcha').then((res) => {
        if (res.status === 200) {
          if (res.data.code === 200) {
            this.svg = res.data.data
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  $color-green:#009688;
  #app {
    background: #f2f2f2;
    .layui-container{
      background-color:#fff;
      .mooc-link{
        margin-left:10px;
        &:hover{
          color:$color-green;
        }
      }
    }
  }
  input{
    width: 190px;
  }
  .svg{
    position:relative;
    margin-top:-15px;
  }
  .error{
    color:red;
  }
</style>
