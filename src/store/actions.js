import firebase from 'firebase/app';

const actions = {
    toggleUploadForm({ commit }){
        commit("toggleUploadForm")
    },
    signUpAction({ commit }, payload) {
        firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            response.user.updateProfile({
                displayName : payload.displayName
            }).then(() => {
                // @TODO mutate user state.
                commit("setUser", response.user);
            }).catch(error =>{
                // @TODO mutate error state.
                commit("setError", error.message);
            })
        })
        .catch(error => {
          // @TODO mutate error state.
          commit("setError", error.message);
        });
    },
    signInAction({ commit }, payload) {
        return firebase
            .auth()
            .signInWithEmailAndPassword(payload.email, payload.password)
            .catch(error => {
                commit("setError", error.message);
            });
    },
    signOutAction({ commit }) {
        firebase
            .auth()
            .signOut()
            .then(() => {
                commit("setUser", null);
            })
            .catch(error => {
                commit("setError", error.message);
            });
    },
    authAction({commit}) {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            commit("setUser", user);
          } else {
            commit("setUser", null);
          }
        });
    }
};

export default actions;