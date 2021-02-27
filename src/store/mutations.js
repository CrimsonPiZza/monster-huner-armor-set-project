const mutations = {
    toggleUploadForm(state){
      state.uploadForm = !state.uploadForm
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setArmors(state, payload) {
      state.armors = payload;
    }
};

export default mutations;