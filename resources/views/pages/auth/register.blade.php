@extends('layouts.default')

@section('meta-title', 'Register')
@section('meta-description', 'Register Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        routes: {
          ...window.serverData.routes,
          action: {
            register: '{{route('pages.auth.register')}}'
          }
        },
      }
    </script>
    <script src="{{mix('js/authRegisterPage.js')}}"></script>
@endpush