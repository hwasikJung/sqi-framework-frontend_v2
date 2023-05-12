/**
 * member 사용하는 vuex store
 */
export const state = () => ({
  usrId: '', // 로그인 정보
  rolId: '',
  nickName: '',
  accessToken: '',
  refreshToken: '',
});

export const mutations = {
  setMember(state, payload) {
    state.usrId = payload.usrId;
    state.nickName = payload.nickName;
    state.rolId = payload.rolId;
    /**
     * 쿠키 방식의 토큰 처리
     */
    this.$cookiz.set('usrId', payload.usrId);
    this.$cookiz.set('accessToken', payload.accessToken);
    this.$cookiz.set('refreshToken', payload.refreshToken);
    this.$cookiz.set('nickName', payload.nickName);
    this.$cookiz.set('rolId', payload.rolId);

    state.accessToken = payload.accessToken;
    state.refreshToken = payload.refreshToken;
  },
  delMember(state) {
    state.usrId = '';
    state.accessToken = '';
    state.refreshToken = '';
    state.nickName = '';
    state.rolId = '';
    this.$cookiz.removeAll();
  },
  updateMember(state, payload) {
    state.usrId = payload.usrId;
    state.nickName = payload.nickName;
  },
};
export const actions = {
  async join({ commit }, payload) {
    try {
      // 테스트용 get
      // const { data } = await this.$axios.post('http://localhost:8086/api/v1/cert/login', {
      const { data } = await this.$axios.get('login', {
        usrId: payload.usrId,
        usrPwd: payload.usrPwd,
      }, {
        withCredentials: true,
      });
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
  async logIn({ commit }, payload) {
    try {
      // 테스트용 get
      // const { data } = await this.$axios.post('http://localhost:8086/api/v1/cert/login', {
      const { data } = await this.$axios.get('join', {
        usrId: payload.usrId,
        usrPwd: payload.usrPwd,
        nickname: this.nickname,
      }, {
        withCredentials: true,
      });
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
  async updateInfo({ commit }, payload) {
    try {
      // 테스트용 get
      // const { data } = await this.$axios.post('http://localhost:8086/api/v1/cert/login', {
      const { data } = await this.$axios.get('update', {
        usrId: payload.usrId,
        nickName: payload.nickName,
        password: payload.password,
        passwordCheck: payload.passwordCheck,
      }, {
        withCredentials: true,
      });
      if (data.resCd === 'SQI0000') {
        commit('updateMember', data.resData);
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
    commit('delMember', null);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  },
};
