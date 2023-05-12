<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>회원가입</v-subheader>
          <v-form ref="form" v-model="valid" @submit.prevent="onJoinForm">
            <v-text-field
              v-model="usrId"
              label="아이디"
              type="text"
              :rules="userIdRules"
              required
            />
            <v-text-field
              v-model="password"
              label="비밀번호"
              type="password"
              :rules="passwordRules"
              required
            />
            <v-text-field
              v-model="passwordCheck"
              label="비밀번호확인"
              type="password"
              :rules="passwordCheckRules"
              required
            />
            <v-text-field
              v-model="nickname"
              label="닉네임"
              type="nickname"
              :rules="nicknameRules"
              required
            />
            <v-checkbox
              v-model="terms"
              required
              :rules="[v => !!v || '약관에 동의해야 합니다.']"
              label="회원가입 동의합니다."
            />
            <v-btn
              color="green"
              type="submit"
            >
              가입하기
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'JoinMem',
  data() {
    return {
      valid: false,
      usrId: '',
      password: '',
      passwordCheck: '',
      nickname: '',
      terms: false,
      userIdRules: [
        (v) => !!v || '아이디는 필수입니다.',
      ],
      nicknameRules: [
        (v) => !!v || '닉네임은 필수입니다.',
      ],
      passwordRules: [
        (v) => !!v || '비밀번호는 필수입니다.',
      ],
      passwordCheckRules: [
        (v) => !!v || '비밀번호 확인은 필수입니다.',
        (v) => v === this.password || '비밀번호가 일치하지 않습니다.',
      ],
    };
  },
  methods: {
    onJoinForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('member/join', {
          nickname: this.nickname,
          usrId: this.usrId,
          password: this.password,
        })
          .then(() => {
            this.$router.push({
              path: '/',
            });
          })
          .catch(() => {
            alert('회원가입 실패');
          });
      }
    },
    head() {
      return {
        title: '회원가입',
      };
    },
  },
};
</script>

<style scoped>

</style>
