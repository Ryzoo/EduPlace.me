@extends('layouts.default')

@section('meta-title', 'Email not verified page')
@section('meta-description', 'Email not verified page Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script src="{{mix('js/emailNotVerifiedPage.js')}}"></script>
@endpush