const mutations = {
    toggleUploadForm(state){
      state.uploadForm = !state.uploadForm
    },
    setUser(state, payload) {
      state.user = payload;
      console.log(state.user)
    },
    setError(state, payload) {
      state.error = payload;
    }
};

export default mutations;