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
          ['+ Add content']: '{{__('+ Add content')}}',
          ['more']: '{{__('more')}}',
        }
      }
    </script>
    <script src="{{mix('js/searchPage.js')}}"></script>
@endpush
