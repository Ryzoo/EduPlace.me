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
        },
        routes: {
          ...window.serverData.routes,
          action: {
            processQuestionnaire: '{{route('action.user.questionnaire')}}'
          }
        },
        t: {
          ...window.serverData.t,
          ['Profile']: '{{__('Profile')}}',
          ['Interests']: '{{__('Interests')}}',
        }
      }
    </script>
    <script src="{{mix('js/userQuestionnairePage.js')}}"></script>
@endpush