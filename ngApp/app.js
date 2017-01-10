var IMDbClone;
(function (IMDbClone) {
    angular.module('imdb-clone', ['ngResource', 'ui.router'])
        .config(function ($resourceProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            template: '<movie-list></movie-list>'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    })
        .run(function () { });
})(IMDbClone || (IMDbClone = {}));
