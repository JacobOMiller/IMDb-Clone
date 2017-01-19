namespace IMDbClone {
  angular.module('imdb-clone', ['ngResource', 'ui.router','ngStorage'])
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
        .state('auth',{
          url:'/auth',
          template:'<auth></auth>'
        })

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: false
      });
    })
    .factory('_',['$window',
    function($window){
      return $window._;
    }
  ])
    .run((
      $rootScope,
      UserService,
      $sessionStorage,
      Session,
      $state: ng.ui.IStateService,
      _
    ) => {
      $rootScope.$on('$stateChangeStart',(event, next) =>{
        UserService.getCurrentUser().then((user)=>{
          $sessionStorage.user = user;
        }).catch((user)=>{
          $sessionStorage.user = user;
        });
        let authorizedRoles = !_.isUndefined(next.data, 'authorizedRoles')
        ? next.data.authorizedRoles : false;
        if (authorizedRoles && !Session.isAuthorized(authorizedRoles)){
          event.preventDefault();
          if(Session.isAuthenticated()){
            $state.go('home');
          } else{
            $state.go('home');
          }
        }
      })
    });
}
