import firebase from 'firebase/app';
import { signUp, getAllArmor } from "@/api/user.api"

const actions = {
    // Frontend Logic
    toggleImageModalAction({ commit }, payload){
        console.log("From toggleImageModalAction()", payload)
        commit("toggleImageModal", payload)
    },

    // Firebase Authentication
    signUpAction({ commit }, payload) {
        return firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(async response => {
            await response.user.updateProfile({
                displayName : payload.displayName
            }).then(async () => {
                try {
                    const user = await firebase.auth().currentUser
                    const token = await user.getIdToken(true)
                    localStorage.setItem('id_token', token)
                    const result = await signUp()
                    if(!result.data.error){
                        console.log("Sign Up Success")
                        // @TODO mutate user state.
                        commit("setUser", user);
                    }else{
                        commit("setError", result.data.message);
                    }
                } catch (error) {
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
            if (user) {
                commit("setUser", user);
                const token = await user.getIdToken(false)
                localStorage.setItem('id_token', token)     
            } else {
                commit("setUser", null);
            }
        });
    },
    // End Firebase Authentication
    
    // API fetching
    async getAllArmorAction({commit}, payload){
        try {
            commit
            if (payload === undefined) return
            const limit = 8
            const result = await getAllArmor(payload, limit)
            return result.data
        } catch (error) {
            return {error : true, message: error.message}
        }
    }
};

export default actions;