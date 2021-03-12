const getters = {
    getUser(state) {
        return state.user;
    },
    isUserAuth(state) {
        return !!state.user;
    },
    getError(state) {
        return state.error;
    },
    getImageModal(state){
        return state.imageModal;
    }
};

export default getters;