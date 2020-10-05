@extends('layouts.default')

@section('meta-title', 'Search')
@section('meta-description', 'Search Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        t: {
          ...window.serverData.t,
          ['Notifications']: '{{__('Notifications')}}',
          ['Settings']: '{{__('Settings')}}',
        }
      }
    </script>
    <script src="{{mix('js/pages/searchPage.js')}}"></script>
@endpush