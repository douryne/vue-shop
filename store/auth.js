import firebase from 'firebase/app'
import 'firebase/auth'

export const state = () => ({
  error: null,
  dataForm: null
})

export const getters = {
  error: state => state.error,
  dataForm: state => state.dataForm
}

export const mutations = {
  setError (state, error) {
    state.error = error
  },
  getData (state, email) {
    state.dataForm = email
    console.log(state.dataForm)
  },
  clearData (state) {
    state.dataForm = null
    console.log(state.dataForm)
  }
}

export const actions = {
  async login ({ dispatch, commit }, { email, password }) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
      commit('setError', e)
      throw e
    }
  },
  async register ({ dispatch, commit }, { email, password, name }) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      const uid = await dispatch('getUid')
      await firebase.database().ref(`/users/${uid}/info`).set({
        name
      })
    } catch (e) {
      commit('setError', e)
      throw e
    }
  },
  getUid () {
    const user = firebase.auth().currentUser
    return user ? user.uid : null
  },
  async logout () {
    await firebase.auth().signOut()
  }
}
