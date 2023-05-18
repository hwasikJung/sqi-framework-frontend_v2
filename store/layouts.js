/**
 * layouts 사용하는 vuex store
 */

import ApiResponseCode from '~/constants/api-response-code.js';

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
    const { data } = await this.$api.get('navMenu');
    if (data.resCd === ApiResponseCode.SUCCESS) {
      commit('loadNavMenu', data.resData);
    }
    return data.resData;
  },
};
