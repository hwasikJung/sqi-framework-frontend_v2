/**
 * layouts 사용하는 vuex store
 */
export const state = () => ({
  navMenu: [],
});

export const mutations = {
  loadNavMenu(state, payload) {
    state.navMenu = payload;
  },
};
export const actions = {
  async loadNavMenu({ commit }) {
    try {
      const res = await this.$api.get('navMenu');
      if (res.data.resCd === 'SQI0000') {
        commit('loadNavMenu', res.data.resData);
      }
    } catch (err) {
      console.error(err);
    }
  },
};
