export const state = () => ({
  alert: false,
  alertText: '',
  alertType: null
})

export const mutations = {
  getAlert (state) {
    state.alert = !state.alert
  },
  changeAlertText (state, alertText) {
    state.alertText = alertText
  },
  changeAlertType (state, alertType) {
    state.alertType = alertType
  }
}

export const actions = {
  getAlert ({ commit }, [alertType, alertText]) {
    setTimeout(() => {
      commit('getAlert')
    }, 2000)
    commit('getAlert')
    commit('changeAlertText', alertText)
    commit('changeAlertType', alertType)
  }
}
