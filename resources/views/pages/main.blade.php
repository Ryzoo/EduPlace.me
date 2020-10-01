@extends('layouts.default')

@section('meta-title', 'About')
@section('meta-description', 'About Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        routes: {
          ...window.serverData.routes,
          search: '{{route('pages.search')}}',
        }
      }
    </script>
    <script src="{{mix('js/pages/mainPage.js')}}"></script>
@endpush