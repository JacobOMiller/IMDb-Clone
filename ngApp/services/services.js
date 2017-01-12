var IMDbClone;
(function (IMDbClone) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.MovieResource = $resource('/api/movies/:id', { id: '@id' }, { update: { method: 'put' } });
            }
            MovieService.prototype.getMovies = function () {
                return this.MovieResource.query().$promise;
            };
            MovieService.prototype.getMovie = function (id) {
                console.log(id);
                return this.MovieResource.get({ id: id }).$promise;
            };
            MovieService.prototype.postMovie = function (movie) {
                return this.MovieResource.save(movie).$promise;
            };
            MovieService.prototype.updateMovie = function () {
                return this.MovieResource.put({ id: movie._id }).$promise;
            };
            MovieService.prototype.deleteMovie = function () {
                return this.MovieResource.delete({ id: movie._id }).$promise;
            };
            MovieService.prototype.update = function (movie) {
                return this.MovieResource.update({ id: movie._id }, movie).$promise;
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        angular.module('imdb-clone').service('MovieService', MovieService);
    })(Services = IMDbClone.Services || (IMDbClone.Services = {}));
})(IMDbClone || (IMDbClone = {}));
