import { login, logout, getInfo } from '@/api/user'
import { getCoupon } from '@/api/user'
import { getToken, setToken, removeToken , getUserID, setUserID , removeUserID } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    userInfo: {},
    CouponNum: 0
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },  
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_COUPONNUM: (state, CouponNum) => {
    state.CouponNum = CouponNum
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { phone, username, password, type, code } = userInfo
    let query = {
      phoneNumber: phone.trim(),
      "userRole": 0,
      type: type
    }
    if (type === 0) {
      query.code = code
    } else if (type === 1) {
      query.password = password
    }
    return new Promise((resolve, reject) => {
      login(query).then(response => {
        // debugger
        const { data } = response
        commit('SET_TOKEN', data.token || '')
        commit('SET_USERINFO', data)
        setToken(data.token || '')
        setUserID(data.userId)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo({userId:state.userInfo.userId||getUserID(),token:state.token||getToken()}).then(response => {
        const { data } = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        // const { userPhone, userAvatar } = data

        commit('SET_USERINFO', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getCouponById({ commit, state }){
    return new Promise((resolve, reject) => {
      getCoupon({userId: state.userInfo.userId||getUserID(),token:state.userInfo.token||getToken()}).then(response => {
        const { data } = response
        commit('SET_COUPONNUM', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        removeUserID()
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      removeUserID()
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

