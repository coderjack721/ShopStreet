import axios from 'axios'

//终极方案
export function request(config) {

    //1.创建axios的实例
    const instance = axios.create({
      baseURL:'http://152.136.185.210:7878/api/m5',
      timeout:3000
    })

    //2.axios的拦截器
     instance.interceptors.request.use(config => {
       return config;
     },error => {

     })
     instance.interceptors.response.use(res => {
       return res.data;
     },error => {

     })
    //3.发送真正的网络请求 本身返回值就是promise
   return instance(config);

}
