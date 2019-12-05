<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">手机/邮箱</label>
          <div class="layui-input-block">
            <input type="text" name="title" required lay-verify="required" placeholder="请输入用户名" autocomplete="off"
                   class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input type="password" name="title" required lay-verify="required" placeholder="请输入密码" autocomplete="off"
                   class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input type="text" name="title" required lay-verify="required" placeholder="请输入标题" autocomplete="off"
                   class="layui-input">
          </div>
          <div class="layui-form-mid layui-word-aux" v-html="svg">辅助文字</div>
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
      svg: ''
    }
  },
  mounted () {
    axios.get('http://localhost:3003/getCaptcha').then((res) => {
      if (res.status === 200) {
        if (res.data.code === 200) {
          this.svg = res.data.data
        }
      }
    })
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
</style>
