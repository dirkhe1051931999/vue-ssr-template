<template>
  <div>
    <h2>vue + koa2 + webpack4 实现服务端渲染</h2>
    <img src="../assets/vue.png" alt />
    <div>
      <router-link to="/item">item</router-link>
      <router-link to="/home">home</router-link>
    </div>
  </div>
</template>
<script>
import titleMixin from "../mixins/title-mixins.js";
export default {
  mixins: [titleMixin],
  title: "首页",
  name: "home",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
div {
  margin: 20px;
  color: #e93030;
  img {
    display: inline-block;
  }
  text-align: center;
}
</style>