var IMDbClone;
(function (IMDbClone) {
    angular.module('imdb-clone', ['ngResource', 'ui.router', 'ngStorage'])
        .config(function ($resourceProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            template: '<movie-list></movie-list>'
        })
            .state('movies', {
            url: '/movies/:id',
            template: '<movie-detail></movie-detail>'
        })
            .state('update', {
            url: '/movies/:id/update',
            template: '<movie-update></movie-update>'
        })
            .state('create', {
            url: '/create',
            template: '<create-movie></create-movie>'
        })
            .state('auth', {
            url: '/auth',
            template: '<auth></auth>'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks: false
        });
    })
        .factory('_', ['$window',
        function ($window) {
            return $window._;
        }
    ])
        .run(function ($rootScope, UserService, $sessionStorage, Session, $state, _) {
        $rootScope.$on('$stateChangeStart', function (event, next) {
            UserService.getCurrentUser().then(function (user) {
                $sessionStorage.user = user;
            }).catch(function (user) {
                $sessionStorage.user = user;
            });
            var authorizedRoles = !_.isUndefined(next.data, 'authorizedRoles')
                ? next.data.authorizedRoles : false;
            if (authorizedRoles && !Session.isAuthorized(authorizedRoles)) {
                event.preventDefault();
                if (Session.isAuthenticated()) {
                    $state.go('home');
                }
                else {
                    $state.go('home');
                }
            }
        });
    });
})(IMDbClone || (IMDbClone = {}));
