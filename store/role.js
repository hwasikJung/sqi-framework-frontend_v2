/**
 * role 사용하는 vuex store
 */
export const state = () => ({
  roleHeaders: [
    { text: '역할아이디', value: 'roleId' },
    { text: '역할명', value: 'roleNm' },
    { text: '역할설명', value: 'roleDesc' },
    { text: '사용여부', value: 'usYn' },
  ],
  roleList: [],
  roleDtl: {},
  result: {},
});

export const mutations = {
  setRoleList(state, payload) {
    state.roleList = payload;
  },
  setRoleDtl(state, payload) {
    state.roleDtl = payload;
  },
  setResult(state, payload) {
    state.result = payload;
  },
};

export const getters = {
  getResult(state) {
    return state.result;
  },
};

export const actions = {
  async getRoleList({ commit }) {
    try {
      const res = await this.$api.get('roleList');
      if (res.data.resCd === 'SQI0000') {
        commit('setRoleList', res.data.resData);
      }
    } catch (error) {
      console.log(error);
    }
  },
  async getRoleDtl({ commit }, roleId) {
    let res;
    try {
      console.log('getRoleDtl.roleId=', roleId);
      res = await this.$api.get('roleDtl');
      if (res.data.resCd === 'SQI0000') {
        commit('setRoleDtl', res.data.resData);
      }
    } catch (error) {
      console.log(error);
    }
    return res;
  },
  async regRole({ commit }, roleInfo) {
    try {
      console.log('regRole.roleInfo=', roleInfo);
      commit('setResult', { resCd: 'SQI0000' });
    } catch (error) {
      console.log(error);
    }
  },
  async updRole({ commit }, roleInfo) {
    try {
      console.log('updRole.roleInfo=', roleInfo);
      commit('setResult', { resCd: 'SQI0000' });
    } catch (error) {
      console.log(error);
    }
  },
  async delRole({ commit }, roleArr) {
    try {
      console.log('roleArr=', roleArr);
      commit('setResult', { resCd: 'SQI0000' });
    } catch (error) {
      console.log(error);
    }
  },
};
