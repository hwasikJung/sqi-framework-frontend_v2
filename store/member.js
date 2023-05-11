/**
 * member 사용하는 vuex store
 */
export const state = () => ({
  member: null, // 로그인 정보
  rolId: '',

  accessToken: '',
  refreshToken: '',
});

export const mutations = {
  setMember(state, payload) {
    state.member = payload.usrId;

    this.$cookiz.set('accessToken', payload.accessToken);
    this.$cookiz.set('refreshToken', payload.refreshToken);

    state.accessToken = payload.accessToken;
    state.refreshToken = payload.refreshToken;
  },
};
export const actions = {
  async logIn({ commit }, payload) {
    try {
      const { data } = await this.$axios.post('http://localhost:8086/api/v1/cert/login', {
        usrId: payload.usrId,
        usrPwd: payload.usrPwd,
      }, {
        withCredentials: true,
      });
      // commit('setMember', data);
      console.log(data);
      if (data.resCd === 'SQI0000') {
        commit('setMember', data.resData);
      } else {
        // 실패
        console.log(data.msg);
      }
    } catch (err) {
      console.error(err);
    }
  },
};
