var IMDbClone;
(function (IMDbClone) {
    var Components;
    (function (Components) {
        var name = 'movieCard';
        var template = '/ngApp/components/movieCard/movieCard.html';
        var MovieCard = (function () {
            function MovieCard(MovieService) {
                this.MovieService = MovieService;
            }
            MovieCard.prototype.submit = function () {
                this.MovieService.update(this.movie)
                    .then(function (data) {
                }).catch(function (e) {
                    throw new Error(e);
                });
            };
            return MovieCard;
        }());
        Components.MovieCard = MovieCard;
        angular.module('imdb-clone').component(name, {
            templateUrl: template,
            controller: IMDbClone.Components.MovieCard,
            controllerAs: 'vm',
            bindings: {
                movie: '<'
            }
        });
    })(Components = IMDbClone.Components || (IMDbClone.Components = {}));
})(IMDbClone || (IMDbClone = {}));
