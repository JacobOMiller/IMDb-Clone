namespace IMDbClone {
  angular.module('imdb-clone', ['ngResource', 'ui.router'])
    .config((
      $resourceProvider: ng.resource.IResourceServiceProvider,
      $stateProvider: ng.ui.IStateProvider,
      $urlRouterProvider: ng.ui.IUrlRouterProvider,
      $locationProvider: ng.ILocationProvider
    ) => {
      $stateProvider
        .state('home', {
          url: '/',
          template: '<movie-list></movie-list>'
        })
        .state('movies',{
          url: '/movies/:id',
          template:'<movie-detail></movie-detail>'
        })
        .state('update',{
          url:'/movies/:id/update',
          template:'<movie-update></movie-update>'
        })
        .state('create',{
          url:'/create',
          template:'<create-movie></create-movie>'
        })

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    })
    .run(() => {});
}
