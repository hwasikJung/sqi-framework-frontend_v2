<template>
  <div>
    <v-card>
      <v-container>
        <div>
          <v-subheader>역할 등록</v-subheader>
          <table>
            <tr>
              <th>역할 아이디</th>
              <td><v-text-field v-model="roleDtlData.roleId" required /></td>
            </tr>
            <tr>
              <th>역할명</th>
              <td><v-text-field v-model="roleDtlData.roleNm" required /></td>
            </tr>
            <tr>
              <th>역할설명</th>
              <td><v-text-field v-model="roleDtlData.roleDesc" required /></td>
            </tr>
            <tr>
              <th>사용여부</th>
              <td><v-text-field v-model="roleDtlData.usYn" required /></td>
            </tr>
          </table>
        </div>
        <div>
          <v-btn elevation="2" @click="goRoleList">목록</v-btn>
          <v-btn elevation="2" @click="regRole">등록</v-btn>
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'roleUpd',
  data() {
    return {
      roleDtlData: {},
    };
  },
  computed: {},
  methods: {
    goRoleList() {
      this.$router.push('/role/roleList');
    },
    async regRole() {
      await this.$store.dispatch('role/delRole', this.roleDtlData);
      const resData = await this.$store.getters['role/getResult'];
      if (resData.resCd === 'SQI0000') {
        alert('등록되었습니다.');
      } else {
        alert('등록 실패');
      }
    },
  },
};
</script>

<style scoped>
table {
  border: 1px solid #d5d1d1;
  margin: 20px 0px;
}
th,
td {
  padding: 0px 20px;
}
</style>
