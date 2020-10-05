@extends('layouts.default')

@section('meta-title', 'User data')
@section('meta-description', 'User data Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script src="{{mix('js/pages/user/settings/userDataPage.js')}}"></script>
@endpush