import axios from 'axios';

const state ={
    isLoggedIn :false,
    userDetail : {}
};

const getters = {
    loggedIn(state){
        return this.state.isLoggedIn;
    }
};

const mutations = {
    setLoggedIn(state, payload){
        state.isLoggedIn = payload;
    }
};

const actions = {
    loginGithub() {
        return new Promise((resolve,reject)=>{
            axios
                .get('http://localhost:8000/api/api/login/github/redirect')
                .then((resp)=>{
                    resolve(resp)
                })
                .catch((error)=>{
                    reject(error)
                })
        })
    },
    loginGithubCallback(ctx, payload) {
        return new Promise((resolve,reject)=>{
            axios
                .get('http://localhost:8000/api/login/github/callback',{
                    params: payload
                }).then((response)=>{
                    if (response.data.access_token) {
                        localStorage.setItem('token', response.data.access_token);
                        ctx.commit('setLoggedIn', true);
                        resolve(response);
                    } else {
                        reject(response);
                    }
                })
                .catch((error)=>{
                    reject(error)
                })
        })
    }
};


export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions,
}