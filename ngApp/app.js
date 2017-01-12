var IMDbClone;
(function (IMDbClone) {
    angular.module('imdb-clone', ['ngResource', 'ui.router'])
        .config(function ($resourceProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            template: '<movie-list></movie-list>'
        })
            .state('movies', {
            url: '/movies/:id',
            template: '<movie-detail></movie-detail>'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    })
        .run(function () { });
})(IMDbClone || (IMDbClone = {}));
