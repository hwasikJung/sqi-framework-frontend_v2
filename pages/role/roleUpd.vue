<template>
  <div>
    <v-card>
      <v-container>
        <div>
          <v-subheader>역할 수정</v-subheader>
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
          <v-btn elevation="2" @click="updRole">저장</v-btn>
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
      // roleId: "",
      roleDtlData: {},
    };
  },
  async fetch() {
    const res = await this.$store.dispatch(
      'role/getRoleDtl',
      this.$route.query.roleId,
    );
    this.roleDtlData = { ...res.data.resData };
  },
  computed: {},
  methods: {
    goRoleList() {
      this.$router.push('/role/roleList');
    },
    async updRole() {
      await this.$store.dispatch('role/updRole', this.roleDtlData);
      const resData = await this.$store.getters['role/getResult'];
      if (resData.resCd === 'SQI0000') {
        alert('수정되었습니다.');
      } else {
        alert('수정 실패');
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
