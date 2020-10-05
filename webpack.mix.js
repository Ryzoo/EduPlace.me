const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const mix = require('laravel-mix');

mix.sass('resources/css/app.scss', 'public/css', []);
mix.react('resources/js/pages/main/builder.jsx', 'public/js/pages/mainPage.js');
mix.react('resources/js/pages/search/builder.jsx', 'public/js/pages/searchPage.js');

//auth
mix.react('resources/js/pages/auth/register/builder.jsx', 'public/js/pages/auth/registerPage.js');
mix.react('resources/js/pages/auth/login/builder.jsx', 'public/js/pages/auth/loginPage.js');

//user
mix.react(
  'resources/js/pages/user/notifications/builder.jsx',
  'public/js/pages/user/notificationsPage.js'
);
mix.react(
  'resources/js/pages/user/settings/user-data/builder.jsx',
  'public/js/pages/user/settings/userDataPage.js'
);
mix.react(
  'resources/js/pages/user/settings/password-change/builder.jsx',
  'public/js/pages/user/settings/passwordChangePage.js'
);
mix.react(
  'resources/js/pages/user/settings/gdpr/builder.jsx',
  'public/js/pages/user/settings/gdprPage.js'
);
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
