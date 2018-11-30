import {RECEIVE_HOMEDATA} from './mutation-types'
import {reqGetHomeData} from '../api'

export default {
  async getHomeData ({commit},cb){
    const result = await reqGetHomeData()
    if(result.code ===0){
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {homeData})
       typeof cb === 'function' && cb()
    }
  }

}
