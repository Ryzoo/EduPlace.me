@extends('layouts.default')

@section('meta-title', 'Questionnaire')
@section('meta-description', 'Questionnaire Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        additional: {
          ...window.serverData.additional,
          profiles: @json($profiles)
        }
      }
    </script>
    <script src="{{mix('js/userQuestionnairePage.js')}}"></script>
@endpush