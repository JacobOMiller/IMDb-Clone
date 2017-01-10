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

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    })
    .run(() => {});
}
