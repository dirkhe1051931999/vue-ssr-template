// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);
// import api from "../api/index";

// export function createStore() {
//   return new Vuex.Store({
//     state: {
//       weather: {}
//     },
//     actions: {
//       getHuxianWeather({ commit }) {
//         return api.getHuxianWeather().then(res => {
//           commit("setHuxianWeather", res.data);
//         });
//       }
//     },
//     mutations: {
//       setHuxianWeather(state, { data }) {
//         state.weather = data;
//       }
//     }
//   });
// }

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 假定我们有一个可以返回 Promise 的
import { getHuxianWeather } from "../api/index";

export function createStore() {
  return new Vuex.Store({
    state: {
      weather: {}
    },
    actions: {
      getHuxianWeather({ commit }, id) {
        return getHuxianWeather().then(item => {
          console.log(item)
          commit("setHuxianWeather", item.data);
        });
      }
    },
    mutations: {
      setHuxianWeather(state, data) {
        state.weather = data;
      }
    }
  });
}
