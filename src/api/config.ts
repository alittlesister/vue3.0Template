import axios from "axios";
// import router from "@/router/index"

const config = axios.create({
  //timeout: 10000,
});

config.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';

config.interceptors.request.use(
  (config) => {
    // config.headers['Access-Control-Max-Age'] = 86400
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    // config.headers["X-Platform"] =
    //   window.__wxjs_environment === "miniprogram" ? "MiniProgram" : "H5";
    //带上token
    // 

    return config;
  },
  (error) => {
    return Promise.reject({
      status: 0,
      msg: error.message
    });
  }
);
config.interceptors.response.use(
  (response) => {
    const res = response.data;
    let resData = null;
    if (response.status === 200) {
      if (typeof res === "string") {
        resData = JSON.parse(res);
      } else {
        resData = res;
      }
      return resData;
    }
  },
  (error) => {
    //axios接口请求错误,跳转到503页面
    // var url = location.href.split('#')[0] + "#/503"
    // location.href = url;
    // router.push({
    //   path: '/503'
    // })
    // return Promise.reject(error);
  }
);
export default config;