@extends('layouts.default')

@section('meta-title', 'For autopromotion')
@section('meta-description', 'About offer for autopromotion')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script src="{{mix('js/autopromotionPage.js')}}"></script>
@endpush
