<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{--Meta data--}}
        <title>EduPlace | @yield('meta-title')</title>
        <meta name="description" content="@yield('meta-description')">
        <meta name="keywords" content="@yield('meta-keywords')">
        <link rel="icon" type="image/svg" href="/images/favicon.svg">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @stack('css')
    </head>
    <body>
        <div id="app">
            @yield('content')
        </div>
    </body>

    {{--Data from server for store--}}
    <script>
      (function() {
        const cssMain = document.createElement('link');
        cssMain.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css';
        cssMain.rel = 'stylesheet';
        cssMain.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(cssMain);
      })();
    </script>
    <script>
      (function() {
        const cssMain = document.createElement('link');
        cssMain.href = '{{mix('css/app.css')}}';
        cssMain.rel = 'stylesheet';
        cssMain.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(cssMain);
      })();
    </script>
    <script>
      const sharedData = @json($sharedData ?? '{}');
      const viewData = @json($viewData ?? '{}');

      window.serverData = {
        viewData: viewData,
        ...sharedData,
        additional: {},
        success: "{{ session('status') ?? '' }}",
        error: "{{ session('error') ?? '' }}",
        validationErrors: JSON.parse('{!! $errors ?? '' !!}'),
        csrfToken: '{{csrf_field()}}',
        jwt: '{{ session('jwt') ?? '' }}',
        old: @json(Session::getOldInput()),
        routes: {
          language: {
            pl: '{{route('language', ["code" => "pl"])}}',
            en: '{{route('language', ["code" => "en"])}}',
          },
          auth: {
            logout: '{{route('pages.auth.logout')}}',
            login: '{{route('login')}}',
            register: '{{route('pages.auth.register')}}',
            passwordRequest: '{{route('password.request')}}',
            passwordUpdate: '{{route('password.update')}}',
            forgotPassword: '{{route('password.email')}}'
          },
          user: {
            notifications: '{{route('pages.user.notifications')}}',
            settings: {
              data: '{{route('pages.user.settings.data')}}',
              password: '{{route('pages.user.settings.password')}}',
              gdpr: '{{route('pages.user.settings.gdpr')}}',
            }
          },
          verification: {
            send: '{{route('verification.send')}}'
          },
          main: '{{route('pages.main')}}',
          search: '{{route('pages.search')}}',
          current: '{{Request::url()}}',
        },
        apiRoutes: {
          notificationsRead: '{{route('action.notifications.read')}}',
        },
      }
    </script>
    <script async defer src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js" integrity="sha512-YSdqvJoZr83hj76AIVdOcvLWYMWzy6sJyIMic2aQz5kh2bPTd9dzY3NtdeEAzPp/PhgZqr4aJObB3ym/vsItMg==" crossorigin="anonymous"></script>
    @stack('scripts')
</html>
