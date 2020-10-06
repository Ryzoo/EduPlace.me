@extends('layouts.default')

@section('meta-title', 'GDPR')
@section('meta-description', 'GDPR Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script src="{{mix('js/pages/user/settings/gdprPage.js')}}"></script>
@endpush