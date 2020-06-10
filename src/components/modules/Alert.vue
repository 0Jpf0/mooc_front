<template>
  <div v-show="isShow">
    <div class="alert">
      <div class="content flex">{{msg}}</div>
      <div v-if="type==='alert'">
        <div class="btnCommon success" @click="close">确定</div>
      </div>
      <div v-else class="space-round">
        <div class="btnCommon cancel" @click="handleCancel">取消</div>
        <div class="btnCommon success" @click="handleSuccess">确定</div>
      </div>
    </div>
    <div class="mask" @click="closeMask"></div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    type: {
      type: String,
      default: 'alert'
    },
    msg: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    },
    success: {
      type: Function,
      default: () => {
        console.log('点击确定按钮')
      }
    },
    cancel: {
      type: Function,
      default: () => {
        console.log('点击取消按钮')
      }
    }
  },
  methods: {
    close() {
      this.isShow = false
    },
    closeMask() {
      if (this.type === 'alert') {
        this.isShow = false
      }
    },
    handleSuccess() {
      this.close();
      this.success();
    },
    handleCancel() {
      this.close();
      this.cancel();
    }
  }
}
</script>

<style lang="scss">
$btn-main: #009688;
$btn-dark: darken($btn-main, 5%);
.alert {
  width: 300px;
  height: 150px;
  border-radius: 6px;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -75px;
  z-index: 3000;
  padding: 20px 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flex {
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
}
.space-round {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  padding: 0 10px;
  width: 100%;
  align-items: center;
}
.btnCommon {
  width: 105px;
  height: 32px;
  text-align: center;
  border-radius: 6px;
  line-height: 32px;
  cursor: pointer;
  &.success {
    background-color: $btn-main;
    color: #fff;
  }
  &.cancel {
    background-color: #cccccc;
    color: #333;
  }
}
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2000;
}
</style>
