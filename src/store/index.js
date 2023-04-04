import { createStore } from "vuex";

export default createStore({
    state: {
        links: {
            twitter: "https://twitter.com/Skyscraper_Game",
            discord: "https://discord.gg/skyscraper-xyz",
            whitelist: "https://skyscraper.game/",
        },
    },
    getters: {
        links(state) {
            return state.links;
        },
    },
    mutations: {},
    actions: {},
    modules: {},
});
