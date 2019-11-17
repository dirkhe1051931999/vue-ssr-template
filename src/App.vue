<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  data() {
    return {};
  },
  mounted() {
    // 防止服务端渲染闪屏问题
    document.body.style.display = "block";
  }
};
</script>

<style lang="scss">
* {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>