import _axios from "../utils/axios";
export function getHuxianWeather(id) {
  return _axios("http://api.help.bj.cn/apis/weather6d/?id=101110106");
  // return _axios("https://www.v2ex.com/api/nodes/show.json?name=python");
}
