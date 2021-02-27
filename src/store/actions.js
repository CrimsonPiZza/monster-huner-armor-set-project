import firebase from 'firebase/app';
import { signUp, getAllArmors } from "@/api/user.api"

const actions = {
    toggleUploadForm({ commit }){
        commit("toggleUploadForm")
    },
    // Firebase Authentication
    signUpAction({ commit }, payload) {
        return firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(async response => {
            console.log("Main create")
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
            console.dir(user)
            if (user) {
                const token = await user.getIdToken(false)
                localStorage.setItem('id_token', token)
                commit("setUser", user);
            } else {
                commit("setUser", null);
            }
        });
    },
    // End Firebase Authentication
    
    // API fetching
    async getAllArmorAction({commit}, payload){
        try {
            const result = await getAllArmors(payload.page, 3)
            if (!result.data.error){
                commit("setArmor", result.data.data)
            }else{
                commit("setError", result.data.message)
            }
        } catch (error) {
            commit("setError", error.message)
        }
    }
};

export default actions;