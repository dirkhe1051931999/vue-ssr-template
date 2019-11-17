<template>
  <div>
    <h2>来自接口的天气预报</h2>
    <p>{{ weather.city }}今日{{weather.life}}</p>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import titleMixin from "../mixins/title-mixins.js";
export default {
  mixins: [titleMixin],
  title: "天气预报",
  name: "item",
  asyncData({ store, route }) {
    console.log("axios", "begin");
    return store.dispatch("getHuxianWeather");
  },
  data() {
    return {};
  },
  computed: {
    weather() {
      return this.$store.state.weather;
    }
  }
};
</script>
<style scoped>
</style>