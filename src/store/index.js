import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uploadForm : false,
  },
  mutations: {
    toggleUploadForm(state){
      state.uploadForm = !state.uploadForm
    }
  },
  actions: {
    toggleUploadForm(context){
      context.commit("toggleUploadForm")
    }
  },
  modules: {
  },
  getters: {
    getUploadForm(state){
      return state.uploadForm
    }
  }
})
