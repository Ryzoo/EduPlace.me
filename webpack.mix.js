const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const mix = require('laravel-mix');

mix.sass('resources/css/app.scss', 'public/css', []);
mix.react('resources/js/pages/main/builder.jsx', 'public/js/pages/mainPage.js');
mix.react('resources/js/pages/search/builder.jsx', 'public/js/pages/searchPage.js');

//auth
mix.react('resources/js/pages/auth/register/builder.jsx', 'public/js/pages/auth/registerPage.js');
mix.react('resources/js/pages/auth/login/builder.jsx', 'public/js/pages/auth/loginPage.js');

//user
mix.react('resources/js/pages/user/settings/builder.jsx', 'public/js/pages/user/settingsPage.js');
mix.version();

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  'primary-color': '#D61889',
                  'layout-body-background': '#fff',
                  'font-size-base': '16px',
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new AntdDayjsWebpackPlugin()],
});
