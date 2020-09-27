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
    {{--Data from server for components--}}
    <script>
      window.serverData = @json($data ?? '')
    </script>
    @stack('scripts')
</html>