import {
  RECEIVE_HOMEDATA,
  RECEIVE_DATATOPIC,
  RECEIVE_DATANAV,
  RECEIVE_USERINFO
} from './mutation-types'

export default {
  [RECEIVE_HOMEDATA] (state, {homeData}) {
    state.homeData = homeData
  },
  [RECEIVE_DATATOPIC] (state ,{dataTopic}){
    state.dataTopic = dataTopic
  },
  [RECEIVE_DATANAV] (state , {dataNav}) {
    state.dataNav = dataNav
  },
  [RECEIVE_USERINFO] (state , {userInfo}) {
    state.userInfo = userInfo
  }
}
