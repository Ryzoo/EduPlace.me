@extends('layouts.default')

@section('meta-title', 'Password change')
@section('meta-description', 'Password change Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        routes: {
          ...window.serverData.routes,
          action: {
            changePassword: '{{route('action.user.settings.password.change')}}'
          }
        },
      }
    </script>
    <script src="{{mix('js/userSettingsPasswordChangePage.js')}}"></script>
@endpush