<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{name:'login'}">登入</router-link>
          </li>
          <li class="layui-this">注册</li>
        </ul>
        <validation-observer ref="observer" v-slot="{validate}">
          <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
            <div class="layui-tab-item layui-show">
              <div class="layui-form layui-form-pane">
                <form method="post">
                  <div class="layui-form-item">
                    <validation-provider name="username" rules="required|email" v-slot="{errors}">
                      <div class="layui-row">
                        <label class="layui-form-label">用户名</label>
                        <div class="layui-input-inline">
                          <input
                            type="text"
                            v-model="username"
                            autocomplete="off"
                            placeholder="请输入用户名"
                            class="layui-input"
                          />
                        </div>
                        <div class="layui-form-mid layui-word-aux">将会成为您唯一的登入名</div>
                      </div>
                      <div>
                        <span style="color: #c00;">{{errors[0]}}</span>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="layui-form-item">
                    <validation-provider
                      name="name"
                      rules="required|min:4|checkNnumber"
                      v-slot="{errors}"
                    >
                      <label class="layui-form-label">昵称</label>
                      <div class="layui-input-inline">
                        <input
                          type="text"
                          v-model="name"
                          autocomplete="off"
                          placeholder="请输入昵称"
                          class="layui-input"
                        />
                      </div>
                      <div class="layui-form-mid">
                        <span style="color: #c00;">{{errors[0]}}</span>
                      </div>
                    </validation-provider>
                  </div>
                  <validation-observer>
                    <div class="layui-form-item">
                      <validation-provider
                        name="password"
                        rules="required|min:6|max:16|confirmed:confirmPassword"
                        v-slot="{errors}"
                      >
                        <div class="layui-row">
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
                          <div class="layui-form-mid layui-word-aux">6到16个字符</div>
                        </div>
                        <div>
                          <span style="color: #c00;">{{errors[0]}}</span>
                        </div>
                      </validation-provider>
                    </div>
                    <div class="layui-form-item">
                      <validation-provider v-slot="{errors}" vid="confirmPassword">
                        <!-- rules="required|min:6|max:16|confirmPassword:@password" -->
                        <label class="layui-form-label">确认密码</label>
                        <div class="layui-input-inline">
                          <input
                            type="password"
                            v-model="rePassword"
                            placeholder="请输入确认密码"
                            autocomplete="off"
                            class="layui-input"
                          />
                        </div>
                        <div class="layui-form-mid">
                          <span style="color: #c00;">{{errors[0]}}</span>
                        </div>
                      </validation-provider>
                    </div>
                  </validation-observer>
                  <div class="layui-form-item">
                    <validation-provider name="code" rules="required|length:4" v-slot="{errors}">
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
                        <span style="color: #c00;" v-html="svg" @click="_getCode">hello</span>
                      </div>
                      <div class="layui-form-mid">
                        <span style="color: #c00;">{{errors[0]}}</span>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="layui-form-item">
                    <button
                      class="layui-btn"
                      type="button"
                      @click="validate().then((res)=>{submit(res)})"
                    >立即注册</button>
                  </div>
                  <div class="layui-form-item fly-form-app">
                    <span>或者直接使用社交账号快捷注册</span>
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
import { getCode, reg } from '../api/login'
import uuid from 'uuid/dist/v4'
export default {
  name: 'Reg',
  data() {
    return {
      username: '',
      name: '',
      password: '',
      rePassword: '',
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
        reg({
          username: this.username,
          password: this.password,
          name: this.name,
          code: this.code,
          sid: this.$store.state.sid
        }).then((res) => {
          if (res.code === 200) {
            this.$alert(res.msg);
            setTimeout(() => {
              this.$router.replace('/login')
            }, 1000)
          } else {
            this.$refs.observer.setErrors(res.msg)
          }
        })
      }
    }
  }

}
</script>

<style scoped>
</style>
