<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{--Meta data--}}
        <title>EduPlace | @yield('meta-title')</title>
        <meta name="description" content="@yield('meta-description')">
        <meta name="keywords" content="@yield('meta-keywords')">
        @stack('css')
    </head>
    <body>
        <div id="app">
            @yield('content')
        </div>
    </body>
    {{--Data from server for store--}}
    <script>
      const success = "{{ session('status') ?? '' }}";
      const error = "{{ session('error') ?? '' }}";
      const sharedData = @json($sharedData ?? '{}');

      window.serverData = {
        ...sharedData,
        success,
        error,
        routes: {
          language: {
            pl: '{{route('language', ["code" => "pl"])}}',
            en: '{{route('language', ["code" => "en"])}}',
          },
          auth: {
            login: '{{route('pages.auth.login')}}',
            register: '{{route('pages.auth.register')}}',
          }
        },
        translation: {
          ['Login']: '{{__('Login')}}',
          ['Join us']: '{{__('Join us')}}',
          ['For Company']: '{{__('For Company')}}',
          ['For Education']: '{{__('For Education')}}',
          ['Created by Educated team']: '{{__('Created by Educated team')}}',
        },
      }
    </script>
    @stack('scripts')
</html>