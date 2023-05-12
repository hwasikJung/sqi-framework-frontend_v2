<template>
  <div>
    <!--
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
-->
    대시보드
  </div>

</template>

<script>

export default {
  name: 'IndexPage',
  middleware: ['anonymous'],

  methods: {

  },
};
</script>
