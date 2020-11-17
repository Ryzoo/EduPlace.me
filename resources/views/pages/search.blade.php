@extends('layouts.default')

@section('meta-title', 'Search')
@section('meta-description', 'Search Description')
@section('meta-keywords', 'Page keywords')

@push('scripts')
    <script>
      window.serverData = {
        ...window.serverData,
        boards:
          {
            recentlyOpened: [
              {
                img: 'https://via.placeholder.com/400x235?text=Jakis+recent+tekst',
                name: 'Random nazwa',
                views: '9451',
                likes: '568',
                liked: false,
              },
              {
                img: 'https://via.placeholder.com/400x235?text=Jakis+recent+tekst',
                name: 'Random nazwa',
                views: '9451',
                likes: '568',
                liked: true,
              },
            ],
            recommended: [
              {
                img: 'https://via.placeholder.com/400x235?text=Jakis+recommended+tekst',
                name: 'Random nazwa',
                views: '9451',
                likes: '568',
                liked: false,
              },
              {
                img: 'https://via.placeholder.com/400x235?text=Jakis+recommended+tekst',
                name: 'Random nazwa',
                views: '9451',
                likes: '568',
                liked: true,
              },
            ],
            userBoards: [
              {
                img: 'https://via.placeholder.com/400x235?text=Jakis+recommended+tekst',
                name: 'Random nazwa',
                views: '9451',
                likes: '568',
                liked: false,
              },
              {
                img: 'https://via.placeholder.com/400x235?text=Jakis+recommended+tekst',
                name: 'Random nazwa',
                views: '9451',
                likes: '568',
                liked: true,
              },
            ],
            searchResults: [
              {
                img: 'https://via.placeholder.com/400x235?text=Jakis+recommended+tekst',
                name: 'Random nazwa',
                views: '9451',
                likes: '568',
                liked: false,
              },
              {
                img: 'https://via.placeholder.com/400x235?text=Jakis+recommended+tekst',
                name: 'Random nazwa',
                views: '9451',
                likes: '568',
                liked: true,
              },
            ],
          },
        tags: [
          {
            name: 'LED strip',
          },
          {
            name: 'RGB lights',
          },
          {
            name: 'Arduino RGB stripe',
          },
          {
            name: 'LED lamp',
          },
          {
            name: 'led zeppelin',
          },
          {
            name: 'LED strip',
          },
          {
            name: 'RGB lights',
          },
          {
            name: 'Arduino RGB stripe',
          },
          {
            name: 'LED lamp',
          },
          {
            name: 'led zeppelin',
          },
        ],
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
