@extends('layouts.default')

@section('meta-title', 'Reset password')
@section('meta-description', 'Reset Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script src="{{mix('js/authForgotPasswordPage.js')}}"></script>
@endpush