<template>
  <div>
    <v-card>
      <v-container>
        <div>
          <v-subheader>역할 상세</v-subheader>
          <table>
            <tr>
              <th>역할 아이디</th>
              <td>{{ this.roleDtl.roleId }}</td>
            </tr>
            <tr>
              <th>역할명</th>
              <td>{{ this.roleDtl.roleNm }}</td>
            </tr>
            <tr>
              <th>역할설명</th>
              <td>{{ this.roleDtl.roleDesc }}</td>
            </tr>
            <tr>
              <th>사용여부</th>
              <td>{{ this.roleDtl.usYn }}</td>
            </tr>
          </table>
        </div>
        <div>
          <v-btn elevation="2" @click="goRoleList">목록</v-btn>
          <v-btn elevation="2" @click="goRoleUpd">수정</v-btn>
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roleId: '',
    };
  },
  async fetch() {
    this.roleId = this.$route.query.roleId;
    await this.$store.dispatch('role/getRoleDtl', this.roleId);
  },
  computed: {
    roleDtl() {
      return this.$store.state.role.roleDtl;
    },
  },
  methods: {
    goRoleList() {
      this.$router.push('/role/roleList');
    },
    goRoleUpd() {
      this.$router.push(`/role/roleUpd?roleId=${this.roleId}`);
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
  padding: 10px 20px;
}
</style>
