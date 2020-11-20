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
          ['Type to find knowledge']: '{{__('Type to find knowledge')}}',
          ['All boards']: '{{__('All boards')}}',
          ['My boards']: '{{__('My boards')}}',
          ['Recently opened boards']: '{{__('Recently opened boards')}}',
          ['Recommended boards']: '{{__('Recommended boards')}}',
        }
      }
    </script>
    <script src="{{mix('js/searchPage.js')}}"></script>
@endpush
