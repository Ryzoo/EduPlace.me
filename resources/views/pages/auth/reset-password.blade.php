@extends('layouts.default')

@section('meta-title', 'Reset password')
@section('meta-description', 'Reset Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        additional: {
          ...window.serverData.additional,
          resetToken: '{{$token}}'
        },
      }
    </script>
    <script src="{{mix('js/authResetPasswordPage.js')}}"></script>
@endpush