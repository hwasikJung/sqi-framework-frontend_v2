/**
 * // 로그인한 사용자
 */
export default ({ store, redirect }) => {
  if (!store.state.member.me) {
    console.log('authenticated');
    redirect('/');
  }
};
