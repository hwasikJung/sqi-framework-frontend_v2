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
  name: 'Index'
};
</script>
