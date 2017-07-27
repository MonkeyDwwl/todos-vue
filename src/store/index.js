//引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'

//在vue中注册vuex组件
Vue.use(Vuex)

import * as getters from './getters'
import * as mutations from './mutations'


//创建一个store并导出
export default new Vuex.Store({
  //状态
  state:{
    todos:[
      {text:'有什么是你永远不放弃',flag:true},
      {text:'鼻青脸肿的哭过',flag:false},
      {text:'走过的叫足迹',flag:false},
    ],
    filter:'all'
  },
  getters,
  mutations,
})
