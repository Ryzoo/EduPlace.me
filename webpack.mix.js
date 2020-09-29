const mix = require('laravel-mix');

mix.sass('resources/css/app.scss', 'public/css', []);
mix.react('resources/js/pages/main/builder.jsx', 'public/js/pages/mainPage.js')
mix.version();
