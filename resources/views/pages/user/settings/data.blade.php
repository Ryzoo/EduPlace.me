@extends('layouts.default')

@section('meta-title', 'User data')
@section('meta-description', 'User data Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        routes: {
          ...window.serverData.routes,
          action: {
            dataChange: '{{route('action.user.settings.data.change')}}'
          }
        },
      }
    </script>
    <script src="{{mix('js/userSettingsUserDataPage.js')}}"></script>
@endpush
