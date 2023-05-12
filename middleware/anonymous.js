/**
 * 비 로그인 사용자
 */
export default ({ store, redirect }) => {
  if (store.state.member.me) {
    // redirect('/');
  }
};
