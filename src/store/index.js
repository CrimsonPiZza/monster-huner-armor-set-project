import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex)

const initialState = () => {
  return {
    imageModal:{
      image_src: null,
      modal: false,
    },
    user: null, 
    error: null 
  };
};

const store = new Vuex.Store({
  state: initialState(),
  mutations: mutations,
  actions: actions,
  getters: getters
})

export default store