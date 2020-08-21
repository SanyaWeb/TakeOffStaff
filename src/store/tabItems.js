import {SET_ACTIVE} from './mutation-types'

export default {
    state: {
        items: [
            {
                name: "Контакты",
                ident: "contact-list",
                active: true,
                tab: "ContactList"
            },
            {
                name: "Создать",
                ident: "new-contact",
                active: false,
                tab: "NewContactForm"
            },
        ],
        tabActive: "ContactList"
    },
    mutations: {
        [SET_ACTIVE](state, ident) {
            state.items.forEach((dataItem) => {
                if(ident === dataItem.ident) {
                    dataItem.active = true;
                    state.tabActive = dataItem.tab;
                } else {
                    dataItem.active = false;
                }
            });
        }
    },
    actions: {
        setTabItem({ commit }, {ident}) {
            commit('SET_ACTIVE', ident);
        }
    }

}