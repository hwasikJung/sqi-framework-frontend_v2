export default ({ $cookiz, $axios, redirect, app, store, config }, inject) => {
  app.router.beforeResolve(async (to, from, next) => {
    // const accessToken = store.getters['member/getAccessToken'];

    // console.log(to.path);
    // console.log(from);
    // console.log('beforeResolve');

    // vuex state 저장된 변수 로드
    // const getMember = store.getters['member/acc'];
    // const getAccessToken = store.getters['member/getAccessToken'];
    // const getRefreshToken = store.getters['member/getRefreshToken'];
    // const getRolId = store.getters['member/getRolId'];

    // 로그인 페이지는 쿠키 토큰 요청을 하지 않는다.
    // if (to.path !== '/member/loginMem') {

    // if ($cookiz.get('accessToken')) {
    //   console.log('엑세스토큰');
    // } else {
    //   console.log('ㄴㄴㄴ');
    // }
    // }

    // getMember = $cookiz.get('accessToken');
    // console.log(getMember);

    // 쿠키에 저장된 토큰 확인 후 state 저장 한다.
    // const token = {
    //   accessToken: $cookiz.get('accessToken') === undefined ? null : $cookiz.get('accessToken'),
    //   refreshToken: $cookiz.get('refreshToken') === undefined ? null : $cookiz.get('refreshToken'),
    // };

    // console.log(token);

    next();
  });

  $axios.onRequest((config) => {
    console.log(`Making request to ${config.url}`); // 요청 때마다 url 출력
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status, 10);
    if (code === 400) {
      redirect('/400'); // 400 에러 발생시 /400으로 리다이렉트
    }
  });

  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
      Authorization: 'accessTokennnnnnnn',
    },
  });

  inject('api', api);
};
