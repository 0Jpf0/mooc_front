<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{name:'reg'}">注册</router-link>
          </li>
        </ul>
        <validation-observer ref="observer" v-slot="{validate}">
          <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
            <div class="layui-tab-item layui-show">
              <div class="layui-form layui-form-pane">
                <form method="post">
                  <div class="layui-form-item">
                    <validation-provider name="username" rules="required|email" v-slot="{errors}">
                      <label class="layui-form-label">用户名</label>
                      <div class="layui-input-inline">
                        <input
                          type="text"
                          v-model="username"
                          placeholder="请输入用户名"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div class="layui-form-mid">
                        <span style="color: #c00;">{{errors[0]}}</span>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="layui-form-item">
                    <validation-provider name="password" rules="required|min:6" v-slot="{errors}">
                      <label class="layui-form-label">密码</label>
                      <div class="layui-input-inline">
                        <input
                          type="password"
                          v-model="password"
                          placeholder="请输入密码"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div class="layui-form-mid">
                        <span style="color: #c00;">{{errors[0]}}</span>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="layui-form-item">
                    <validation-provider
                      name="code"
                      ref="codefield"
                      rules="required|length:4"
                      v-slot="{errors}"
                    >
                      <label class="layui-form-label">验证码</label>
                      <div class="layui-input-inline">
                        <input
                          type="text"
                          v-model="code"
                          placeholder="请输入验证码"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div>
                        <span style="color: #c00;" v-html="svg" @click="_getCode"></span>
                      </div>
                      <div class="layui-form-mid">
                        <span style="color: #c00;">{{errors[0]}}</span>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="layui-form-item">
                    <button
                      class="layui-btn"
                      lay-filter="*"
                      lay-submit
                      type="button"
                      @click="validate().then((res)=>{submit(res)})"
                    >立即登录</button>
                    <span style="padding-left:20px;">
                      <router-link :to="{name:'forget'}">忘记密码？</router-link>
                    </span>
                  </div>
                  <div class="layui-form-item fly-form-app">
                    <span>或者使用社交账号登入</span>
                    <a
                      href
                      onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                      class="iconfont icon-qq"
                      title="QQ登入"
                    ></a>
                    <a
                      href
                      onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                      class="iconfont icon-weibo"
                      title="微博登入"
                    ></a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>
import { getCode, login } from '../api/login'
import uuid from 'uuid/dist/v4'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      code: '',
      svg: ''
    }
  },
  mounted() {
    let sid = "";
    if (localStorage.getItem('sid')) {
      sid = localStorage.getItem('sid')
    } else {
      sid = uuid();
      localStorage.setItem('sid', sid)
    }
    this.$store.commit('setSid', sid)
    this._getCode()
  },
  methods: {
    _getCode() {
      let sid = this.$store.state.sid;
      getCode(sid).then((res) => {
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    },
    submit(res) {
      if (res) {
        login({
          username: this.username,
          password: this.password,
          code: this.code,
          sid: this.$store.state.sid
        }).then((res) => {
          if (res.code === 200) {
            console.log('登录成功');
            this.username = "";
            this.password = "";
            this.code = ""
            requestAnimationFrame(() => {
              this.$refs.observer.reset();
            })
          } else if (res.code === 401) {
            this.$refs.codefield.setErrors([res.msg])
          } else if (res.code === 500) {
            this.$alert(res.msg)
          }
        })
      }
    }
  }
}
</script>

<style scoped>
</style>
