@extends('layouts.default')

@section('meta-title', 'Login')
@section('meta-description', 'Login Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script src="{{mix('js/authLoginPage.js')}}"></script>
@endpush