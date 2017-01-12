var IMDbClone;
(function (IMDbClone) {
    var Components;
    (function (Components) {
        var name = 'createMovie';
        var template = '/ngApp/components/createmovie/createMovie.html';
        var CreateMovie = (function () {
            function CreateMovie(MovieService, $state) {
                this.MovieService = MovieService;
                this.$state = $state;
            }
            CreateMovie.prototype.submit = function () {
                this.MovieService.postMovie(this.movie).then(function (result) {
                    console.log(result);
                }).catch(function (e) {
                    throw new Error(e);
                });
            };
            return CreateMovie;
        }());
        Components.CreateMovie = CreateMovie;
        angular.module('imdb-clone').component(name, {
            templateUrl: template,
            controller: IMDbClone.Components.CreateMovie,
            controllerAs: 'vm'
        });
    })(Components = IMDbClone.Components || (IMDbClone.Components = {}));
})(IMDbClone || (IMDbClone = {}));
