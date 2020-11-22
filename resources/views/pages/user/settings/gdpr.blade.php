@extends('layouts.default')

@section('meta-title', 'GDPR')
@section('meta-description', 'GDPR Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script src="{{mix('js/userSettingsGdprPage.js')}}"></script>
@endpush