import firebase from 'firebase/app';
import { signUp } from "@/api/user.api"

const actions = {
    toggleUploadForm({ commit }){
        commit("toggleUploadForm")
    },
    async signUpAction({ commit }, payload) {
        firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            response.user.updateProfile({
                displayName : payload.displayName
            }).then(async () => {
                try {
                    const result = await signUp()
                    console.log(result)
                    if(!result.data.error){
                        // @TODO mutate user state.
                        commit("setUser", response.user);
                    }else{
                        commit("setUser", null);
                        commit("setError", result.data.message);
                    }
                } catch (error) {
                    commit("setUser", null);
                    commit("setError", error.message);
                }
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
        firebase.auth().onAuthStateChanged(async user => {
            console.dir(user)
            if (user) {
                localStorage.setItem('id_token', await user.getIdToken(false))
                commit("setUser", user);
            } else {
                commit("setUser", null);
            }
        });
    }
};

export default actions;