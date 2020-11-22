@extends('layouts.default')

@section('meta-title', 'Register')
@section('meta-description', 'Register Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script src="{{mix('js/authRegisterPage.js')}}"></script>
@endpush