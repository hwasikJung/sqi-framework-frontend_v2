<template>
  <div>
    <v-data-table
      :headers="roleHeaders"
      :items="roleList"
      :items-per-page="5"
      class="elevation-1"
      item-key="roleId"
      show-select
      @click:row="goRoleDtl"
      v-model="selected"
    />
    <div class="btn_area">
      <v-btn elevation="2" @click="delRole">삭제</v-btn>
      <v-btn elevation="2" @click="regRole">등록</v-btn>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      selected: [],
    };
  },
  async fetch() {
    await this.$store.dispatch('role/getRoleList');
  },
  computed: {
    roleHeaders() {
      return this.$store.state.role.roleHeaders;
    },
    roleList() {
      return this.$store.state.role.roleList;
    },
  },
  methods: {
    async goRoleDtl(event, { item }) {
      this.$router.push(`/role/roleDtl?roleId=${item.roleId}`);
    },
    async delRole() {
      const paramArr = this.selected.map((v) => v.roleId);
      if (paramArr.length === 0) {
        alert('삭제할 역할을 선택해주세요.');
      } else {
        await this.$store.dispatch('role/delRole', paramArr);
        const resData = await this.$store.getters['role/getResult'];
        if (resData.resCd === 'SQI0000') {
          alert('삭제되었습니다.');
        } else {
          alert('삭제 실패');
        }
      }
    },
    regRole() {
      this.$router.push('/role/roleReg');
    },
  },
};
</script>

<style scoped>
</style>
