const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const mix = require('laravel-mix');

mix.sass('resources/css/app.scss', 'public/css', []);
mix.react('resources/js/pages/main/builder.jsx', 'public/js/pages/mainPage.js')
mix.version();

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [{
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: {
                'primary-color': '#3790ff',
              },
              javascriptEnabled: true
            }
          }
        },],
      },
    ],
  },
  plugins: [new AntdDayjsWebpackPlugin()],
});