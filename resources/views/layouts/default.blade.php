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
        <link rel="stylesheet" href="{{mix('css/app.css')}}">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
        @stack('css')
    </head>
    <body>
        <div id="app">
            @yield('content')
        </div>
    </body>

    {{--Data from server for store--}}
    <script>
      const sharedData = @json($sharedData ?? '{}');

      window.serverData = {
        ...sharedData,
        success: "{{ session('status') ?? '' }}",
        error: "{{ session('error') ?? '' }}",
        validationErrors: JSON.parse('{!! $errors ?? '' !!}'),
        csrfToken: '{{csrf_field()}}',
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
            passwordReset: '{{route('password.request')}}',
          },
          user: {
            notifications: '{{route('pages.auth.register')}}',
            settings: '{{route('pages.user.settings')}}',
          },
          main: '{{route('pages.main')}}',
          search: '{{route('pages.search')}}',
          current: '{{Request::url()}}',
        },
        t: {
          ['Search']: '{{__('Search')}}',
          ['Logout']: '{{__('Logout')}}',
          ['Login']: '{{__('Login')}}',
          ['Join us']: '{{__('Join us')}}',
          ['For Company']: '{{__('For Company')}}',
          ['For Education']: '{{__('For Education')}}',
          ['Created by Educated team']: '{{__('Created by Educated team')}}',
          ['Notifications']: '{{__('Notifications')}}',
          ['Settings']: '{{__('Settings')}}',
          ['Already with us:']: '{{__('Already with us:')}}',
        },
      }
    </script>
    <script async defer src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js" integrity="sha512-YSdqvJoZr83hj76AIVdOcvLWYMWzy6sJyIMic2aQz5kh2bPTd9dzY3NtdeEAzPp/PhgZqr4aJObB3ym/vsItMg==" crossorigin="anonymous"></script>
    @stack('scripts')
</html>