export default ({ $axios, redirect }, inject) => {
  // $axios.onRequest((config) => {
  //   console.log(`Making request to ${config.url}`); // 요청 때마다 url 출력
  // });
  //
  // $axios.onError((error) => {
  //   const code = parseInt(error.response && error.response.status, 10);
  //   if (code === 400) {
  //     redirect("/400"); // 400 에러 발생시 /400으로 리다이렉트
  //   }
  // });

  const api = $axios.create({
    headers: {
      common: {
        Accept: "text/plain, */*",
      },
      Authorization: "accessTokennnnnnnn"
    },
  });

  inject("api", api);
};
