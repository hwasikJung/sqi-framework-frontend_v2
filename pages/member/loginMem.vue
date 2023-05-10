<template>
  <div>
    <v-container>
      <v-card>
        <v-form ref="form" @submit.prevent="login">
          <v-container>
            <v-text-field
              v-model="usrId"
              label="이메일"
              type="email"
              required
            />
            <v-text-field
              v-model="usrPwd"
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
    user:{{ $auth.user }}
    <p />
    loggedIn: {{ $auth.loggedIn }}
    <p />
    accessToken: {{ $auth.accessToken }}
  </div>
</template>

<script>
export default {
  name: 'LoginMem',
  data() {
    return {
      usrId: 'adm01',
      usrPwd: 'qwer1234',
    };
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            usrId: this.usrId,
            usrPwd: this.usrPwd,
          },
        }).then(({ data }) => {
          // this.$auth.setUser(data.resData.usrId);
          // this.$auth.strategy.token.set(data.resData.accessToken);
          // this.$auth.strategy.refreshToken.set(data.resData.refreshToken);
          // this.$auth.setUserToken(data.resData.refreshToken, data.resData.refreshToken);
          console.log(data.resData);
        });
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>

</style>
