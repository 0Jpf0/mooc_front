<template>
  <div id="app">
    <mooc-header></mooc-header>
    <router-view/>
    <mooc-footer></mooc-footer>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    'mooc-header': Header,
    'mooc-footer': Footer
  }
}
</script>
<style lang="scss">
 @import 'assets/layui/css/layui.css';
 @import "assets/css/global.css";
 @import 'assets/layui/css/modules/layer/default/layer.css';
</style>
