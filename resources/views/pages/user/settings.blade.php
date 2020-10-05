@extends('layouts.default')

@section('meta-title', 'User Settings')
@section('meta-description', 'Settings Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script src="{{mix('js/pages/user/settingsPage.js')}}"></script>
@endpush