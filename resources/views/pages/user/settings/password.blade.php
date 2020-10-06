@extends('layouts.default')

@section('meta-title', 'Password change')
@section('meta-description', 'Password change Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script src="{{mix('js/pages/user/settings/passwordChangePage.js')}}"></script>
@endpush