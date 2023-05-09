<template>
  <div>
    <nuxt-link to="/member/joinMem">
      회원가입
    </nuxt-link>
    <p />
    <nuxt-link to="/member/findIdPw">
      아이디/비밀번호 찾기
    </nuxt-link>
    <p />
    <nuxt-link to="/member/loginInfo">
      내 정보
    </nuxt-link>
    <p />
    <nuxt-link to="/member/loginMem">
      로그인
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  // async fetch({ store }) {
  //   await store.dispatch('layouts/loadNavMenu');
  //   // console.log(`${process.env.API_URL}navMenu`);
  //   // const { data } = await this.$api.get(`${process.env.API_URL}navMenu`);
  // },
};
</script>
