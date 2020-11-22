const mix = require('laravel-mix');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const AntdScssThemePlugin = require('@igor-lemon/antd-scss-theme-plugin');

mix
  .sass('resources/css/app.scss', 'public/css', [])
  .react('resources/js/pages/main/builder.jsx', 'public/js/mainPage.js')
  .react('resources/js/pages/company/builder.jsx', 'public/js/companyPage.js')
  .react('resources/js/pages/autopromotion/builder.jsx', 'public/js/autopromotionPage.js')
  .react('resources/js/pages/education/builder.jsx', 'public/js/educationPage.js')
  .react('resources/js/pages/search/builder.jsx', 'public/js/searchPage.js')
  .react('resources/js/pages/auth/register/builder.jsx', 'public/js/authRegisterPage.js')
  .react('resources/js/pages/auth/login/builder.jsx', 'public/js/authLoginPage.js')
  .react('resources/js/pages/auth/reset-password/builder.jsx', 'public/js/authResetPasswordPage.js')
  .react(
    'resources/js/pages/auth/email-verification/builder.jsx',
    'public/js/emailNotVerifiedPage.js'
  )
  .react(
    'resources/js/pages/auth/forgot-password/builder.jsx',
    'public/js/authForgotPasswordPage.js'
  )
  .react(
    'resources/js/pages/user/notifications/builder.jsx',
    'public/js/userSettingsNotificationsPage.js'
  )
  .react(
    'resources/js/pages/user/settings/user-data/builder.jsx',
    'public/js/userSettingsUserDataPage.js'
  )
  .react(
    'resources/js/pages/user/settings/password-change/builder.jsx',
    'public/js/userSettingsPasswordChangePage.js'
  )
  .react('resources/js/pages/user/questionnaire/builder.jsx', 'public/js/userQuestionnairePage.js')
  .react('resources/js/pages/user/settings/gdpr/builder.jsx', 'public/js/userSettingsGdprPage.js')
  .version();

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          AntdScssThemePlugin.themify({
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          }),
        ],
      },
    ],
  },
  plugins: [
    new AntdDayjsWebpackPlugin(),
    new AntdScssThemePlugin('resources/css/framework/variables.scss'),
  ],
});
