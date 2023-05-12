/**
 * member 사용하는 vuex store
 */
export const state = () => ({
  me: '', // 로그인 정보
  rolId: '',

  accessToken: '',
  refreshToken: '',
});

export const mutations = {
  setMe(state, payload) {
    state.me = payload.usrId;
    /**
     * 쿠키 방식의 토큰 처리
     */
    this.$cookiz.set('usrId', payload.usrId);
    this.$cookiz.set('accessToken', payload.accessToken);
    this.$cookiz.set('refreshToken', payload.refreshToken);

    state.accessToken = payload.accessToken;
    state.refreshToken = payload.refreshToken;
  },
  delMe(state) {
    state.me = '';
    state.accessToken = '';
    state.refreshToken = '';
    this.$cookiz.removeAll();
  },
};
export const actions = {
  async logIn({ commit }, payload) {
    try {
      const { data } = await this.$api.get('login', {
        usrId: payload.usrId,
        usrPwd: payload.usrPwd,
      }, {
        withCredentials: true,
      });

      // const { data } = await this.$axios.post('http://localhost:8086/api/v1/cert/login', {
      //   usrId: payload.usrId,
      //   usrPwd: payload.usrPwd,
      // }, {
      //   withCredentials: true,
      // });

      // commit('setMember', data);
      // console.log(data);
      if (data.resCd === 'SQI0000') {
        commit('setMe', data.resData);
      } else {
        // 실패
        console.log(data.msg);
      }
    } catch (err) {
      console.error(err);
    }
  },
  async logOut({ commit }) {
    // this.$axios.post('logout', {}, {
    //   withCredentials: true,
    // })
    //   .then(() => {
    commit('delMe', null);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  },
};
