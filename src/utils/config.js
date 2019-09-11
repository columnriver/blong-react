
// 请把生产环境的 redirect_url，client_id 和 client_secret 中的 "****", 换成自己创建的 OAuth App 的具体参数即可。
const config = {
  'oauth_uri': 'https://github.com/login/oauth/authorize',
  'redirect_uri': 'http://47.93.185.193/login',
  'client_id': 'bbda75ed59d119102cb1',
  'client_secret': '883657faaf5202a3399ff9a8d36b86e5185e02e9',
};

// 本地开发环境下 （参数可以直接用）
if (process.env.NODE_ENV === 'development') {
  config.redirect_uri = "http://localhost:3001/login"
  config.client_id = "00485dbcd602508dade6"
  config.client_secret = "8f37f4d395d113884fe71b795a989634fd013cd4"
}
export default config;
