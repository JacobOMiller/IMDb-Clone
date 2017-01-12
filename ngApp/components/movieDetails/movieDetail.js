var IMDbClone;
(function (IMDbClone) {
    var Components;
    (function (Components) {
        var name = 'movieDetail';
        var template = './ngApp/components/movieDetails/movieDetail.html';
        var MovieDetail = (function () {
            function MovieDetail(MovieService, $stateParams) {
                var _this = this;
                MovieService.getMovie($stateParams['id']).then(function (result) {
                    _this.movie = result;
                }).catch(function (e) {
                    throw new Error(e);
                });
            }
            return MovieDetail;
        }());
        Components.MovieDetail = MovieDetail;
        angular.module('imdb-clone').component(name, {
            templateUrl: template,
            controller: IMDbClone.Components.MovieDetail,
            controllerAs: 'vm'
        });
    })(Components = IMDbClone.Components || (IMDbClone.Components = {}));
})(IMDbClone || (IMDbClone = {}));
