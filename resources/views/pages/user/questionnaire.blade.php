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
          ['Profile Student']: '{{__('Profile Student')}}',
          ['Profile Creator']: '{{__('Profile Creator')}}',
          ['Interests']: '{{__('Interests')}}',
          ['Mark the interests you are interested in.']: '{{__('Mark the interests you are interested in.')}}',
          ['Select profile that can represent you.']: '{{__('Select profile that can represent you.')}}',
        }
      }
    </script>
    <script src="{{mix('js/userQuestionnairePage.js')}}"></script>
@endpush