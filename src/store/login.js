import {HIDE_AUTH_ALERT, SHOW_ERROR_AUTH} from './mutation-types'

export default {
    state: {
        apiUrl: "http://localhost:3000/login",
        form: {
            login: "",
            password: ""
        },
        authAlert: {
            show: false,
            className: "",
            text: ""
        }
    },
    mutations: {
        [SHOW_ERROR_AUTH](state, text) {
            state.authAlert.show = true;
            state.authAlert.className = "error";
            state.authAlert.text = text;

        },
        [HIDE_AUTH_ALERT](state) {
            state.authAlert.show = false;
            state.authAlert.className = "";
            state.authAlert.text = "";
        },
    },
    actions: {
        testAuth({ commit, state }, data) {

            const requestUrl = state.apiUrl;

            const getOptions = () => {
                return {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: '{"login": "'+state.form.login+'","password": "'+state.form.password+'"}'
                }
            };

            let fetchAuth = fetch(requestUrl, getOptions());

            fetchAuth.then(function(response){
                response.json().then(function (d) {
                    if (response.status === 200) {
                        localStorage.setItem('jwt',d.access_token);
                        if (localStorage.getItem('jwt') != null){
                            data.router.push("/");
                        }
                    } else {
                        commit(SHOW_ERROR_AUTH, d.status + " - " + d.message);
                    }
                });
            });
        },
        hideAuthAlert({ commit }) {
            commit(HIDE_AUTH_ALERT);
        }
    }

}