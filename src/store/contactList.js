import {SET_CONTACTS, EMPTY_INSERT_FORM, SHOW_SUCCESS_INSERT, HIDE_INSERT_ALERT, SHOW_ERROR_INSERT} from './mutation-types'

export default {
    state: {
        apiUrl: "http://localhost:3000/contacts",
        items: [],
        insertForm: {
            name: "",
            phone: ""
        },
        insertFormAlert: {
            show: false,
            className: "",
            text: ""
        },
        filterWord: {
            text: ""
        }
    },
    mutations: {
        [SET_CONTACTS](state, contacts) {
            contacts.forEach((contact) => {
                contact.edit = false;
                contact.show = true;
            })
            state.items = [...contacts];
        },
        [EMPTY_INSERT_FORM](state) {
            state.insertForm.name = "";
            state.insertForm.phone = "";
        },
        [SHOW_SUCCESS_INSERT](state) {
            state.insertFormAlert.show = true;
            state.insertFormAlert.className = "success";
            state.insertFormAlert.text = "Запись успешно сохранена";
        },
        [HIDE_INSERT_ALERT](state) {
            state.insertFormAlert.show = false;
            state.insertFormAlert.className = "";
            state.insertFormAlert.text = "";
        },
        [SHOW_ERROR_INSERT](state, text) {
            state.insertFormAlert.show = true;
            state.insertFormAlert.className = "error";
            state.insertFormAlert.text = text;
        }
    },
    actions: {
        getContacts({state, commit}, router) {

            const requestUrl = state.apiUrl;
            const getOptions = () => {
                return {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        Authorization: "Bearer " + localStorage.getItem('jwt'),
                    }
                }
            };

            let fetchContacts = fetch(requestUrl, getOptions());

            fetchContacts.then(function(response){
                response.json().then(function (d) {
                    if (response.status === 200) {
                        commit(SET_CONTACTS, d);
                        commit(SET_CONTACTS, d);
                    } else {
                        if(response.status === 401) {
                            router.push("/login");
                        } else {
                            alert('Ошибка получения данных');
                        }
                    }
                });
            });
        },
        insertContact ({state, commit}) {
            commit(HIDE_INSERT_ALERT);
            const requestUrl = state.apiUrl;
            if(state.insertForm.name.trim() === "") {
                commit(SHOW_ERROR_INSERT, "Заполните поле 'Имя'");
            } else {
                const getOptions = () => {
                    return {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: "Bearer " + localStorage.getItem('jwt'),
                        },
                        body: '{"name": "'+state.insertForm.name+'","phone": "'+state.insertForm.phone+'"}'
                    }
                };
                let fetchInsertContact = fetch(requestUrl, getOptions());

                fetchInsertContact.then(function(response){
                    response.json().then(function () {
                        if (response.status >= 200 && response.status < 300) {
                            commit(EMPTY_INSERT_FORM);
                            commit(SHOW_SUCCESS_INSERT);
                        } else {
                            if(response.status === 401) {
                                commit(SHOW_ERROR_INSERT, 'Необходимо авторизоваться');
                            } else {
                                commit(SHOW_ERROR_INSERT, "Ошибка сервера");
                            }
                        }
                    });
                });
            }
        },
        hideInsertAlert({commit}) {
            commit(HIDE_INSERT_ALERT);
        },
        deleteContact({state}, {id}) {

            const requestUrl = state.apiUrl + "/"+ id;

            const getOptions = () => {
                return {
                    method: 'DELETE',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + localStorage.getItem('jwt'),
                    }
                }
            };
            let fetchDeleteContact = fetch(requestUrl, getOptions());

            fetchDeleteContact.then(function(response){
                response.json().then(function () {
                    if (response.status >= 200 && response.status < 300) {
                        let new_items = state.items.filter((item) => {
                            return item.id !== id;
                        });
                        state.items = [...new_items];
                        alert("Запись успешно удалена");
                    } else {
                        if(response.status === 401) {
                            alert("Необходимо авторизоваться");
                        } else {
                            alert("Ошибка сервера");
                        }
                    }
                });
            });
        },
        editContact ({state}, item) {

            const requestUrl = state.apiUrl + "/"+ item.id;

            const getOptions = () => {
                return {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + localStorage.getItem('jwt'),
                    },
                    body: '{"name": "'+item.name+'","phone": "'+item.phone+'"}'
                }
            };
            let fetchEditContact = fetch(requestUrl, getOptions());

            fetchEditContact.then(function(response){
                response.json().then(function () {
                    if (response.status >= 200 && response.status < 300) {
                        state.items.forEach((stateItem, i) => {
                            if(stateItem.id === item.id) {
                                item.edit = false;
                                state.items[i] = item;
                            }
                        });
                        alert("Запись сохранена");
                    } else {
                        alert("Ошибка сервера");
                    }
                });
            });

        },
        changeFilter({state}, filterWord) {
            let filterRegExp = new RegExp('(^|.* )'+filterWord+'.*','i');
            state.items.forEach((item) => {
                item.show = filterRegExp.test(item.name);
            });
        }

    }

}