<template>
  <div>
    <v-container>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>내 프로필</v-subheader>
          <v-form ref="form" v-model="valid" @submit.prevent="onUpdateInfo">
            <v-text-field
              v-model="nickname"
              label="닉네임"
              type="nickname"
              :rules="nicknameRules"
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
            <v-btn
              color="blue"
              type="submit"
            >
              수정
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'LoginIfo',
  data() {
    return {
      valid: false,
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
    async onUpdateInfo() {
      if (this.$refs.form.validate()) {
        try {
          await this.$store.dispatch('member/updateInfo', {
            usrId: this.$store.state.member.usrId,
            nickName: this.nickName,
            password: this.password,
            passwordCheck: this.passwordCheck,
          });
          await this.$router.push({ path: '/' });
        } catch (err) {
          console.error(err);
        }
      }
    },
  },
};
</script>

<style scoped>

</style>
