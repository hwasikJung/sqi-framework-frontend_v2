<template>
  <div>
    <v-container v-if="!member">
      <v-card>
        <v-form ref="form" v-model="valid" @submit.prevent="onLogin">
          <v-container>
            <v-text-field
              v-model="usrId"
              :rules="userIdRules"
              label="아이디"
              type="email"
              required
            />
            <v-text-field
              v-model="usrPwd"
              :rules="passwordRules"
              label="비밀번호"
              type="password"
              required
            />
            <v-btn
              color="green"
              type="submit"
            >
              로그인
            </v-btn>
            <v-btn
              nuxt
              to="/member/joinMem"
            >
              회원가입
            </v-btn>
          </v-container>
        </v-form>
      </v-card>
    </v-container>
    <v-container v-else>
      <v-card>
        <v-container>
          {{member}}님 로그인되었습니다.
          <v-btn @click="onLogOut">로그아웃</v-btn>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'LoginMem',
  data() {
    return {
      valid: false,
      userIdRules: [
        (v) => !!v || '아이디는 필수입니다.',
      ],
      passwordRules: [
        (v) => !!v || '비밀번호는 필수입니다.',
      ],
      usrId: 'adm01',
      usrPwd: 'qwer1234',
    };
  },
  computed: {
    member() {
      return this.$store.state.member.member;
    },
  },
  methods: {
    async onLogin() {
      if (this.$refs.form.validate()) {
        try {
          await this.$store.dispatch('member/logIn', {
            usrId: this.usrId,
            usrPwd: this.usrPwd,
          });
        } catch (err) {
          console.error(err);
        }
      }
    },
    onLogOut() {
      this.$store.dispatch('users/logOut');
    },
  },
};
</script>

<style scoped>

</style>
