const mutations = {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    toggleImageModal(state, payload){
      state.imageModal = payload
    }
};

export default mutations;