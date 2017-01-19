var IMDbClone;
(function (IMDbClone) {
    var Components;
    (function (Components) {
        var name = 'movieList';
        var template = '/ngApp/components/movieList/movieList.html';
        var MovieList = (function () {
            function MovieList(MovieService, Session) {
                var _this = this;
                this.MovieService = MovieService;
                this.Session = Session;
                this.currentUser = Session.getUser();
                this.MovieService.getMovies()
                    .then(function (data) {
                    _this.movies = data;
                }).catch(function (e) {
                    _this.movies = [];
                    throw new Error(e);
                });
            }
            return MovieList;
        }());
        Components.MovieList = MovieList;
        angular.module('imdb-clone').component(name, {
            templateUrl: template,
            controller: IMDbClone.Components.MovieList,
            controllerAs: 'vm'
        });
    })(Components = IMDbClone.Components || (IMDbClone.Components = {}));
})(IMDbClone || (IMDbClone = {}));
