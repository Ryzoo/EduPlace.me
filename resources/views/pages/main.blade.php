@extends('layouts.default')

@section('meta-title', 'Page Title')
@section('meta-description', 'Page Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script src="{{mix('js/pages/mainPage.js')}}"></script>
@endpush