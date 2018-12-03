import {
  RECEIVE_HOMEDATA,
  RECEIVE_DATATOPIC,
  RECEIVE_DATANAV,
  RECEIVE_USERINFO,
  RECEIVE_LOCALSTORAGE
} from './mutation-types'
import {
  reqGetHomeData,
  reqDataTopic,
  reqGetDataNav,

} from '../api'

export default {
  async getHomeData ({commit},cb){
    const result = await reqGetHomeData()
    if(result.code ===0){
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {homeData})
       typeof cb === 'function' && cb()
    }
  },

  async getDataTopic ({commit} ,cb) {
    const result = await reqDataTopic()
    if(result.code === 0){
      const dataTopic = result.data
      commit (RECEIVE_DATATOPIC, {dataTopic})
      typeof cb === 'function' && cb()
    }
  },


  async getDataNav ({commit}) {
    const result = await reqGetDataNav()
    if(result.code === 0){
      const dataNav = result.data
      commit (RECEIVE_DATANAV, {dataNav})
    }else {
      alert('1')
    }
},


  saveUserInfo ({commit} , userInfo) {
    commit(RECEIVE_USERINFO , {userInfo})
  },

  localStorage ({commit}, local) {
    commit (RECEIVE_LOCALSTORAGE, {local})
  }
}
