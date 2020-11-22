@extends('layouts.default')

@section('meta-title', 'Login')
@section('meta-description', 'Login Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        routes: {
          ...window.serverData.routes,
          action: {
            login: '{{route('login')}}'
          }
        },
      }
    </script>
    <script src="{{mix('js/authLoginPage.js')}}"></script>
@endpush