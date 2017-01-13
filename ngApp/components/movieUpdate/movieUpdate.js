var IMDbClone;
(function (IMDbClone) {
    var Components;
    (function (Components) {
        var name = 'movieUpdate';
        var template = '/ngApp/components/movieUpdate/movieUpdate.html';
        var UpdateMovie = (function () {
            function UpdateMovie($stateParams, MovieService, $state) {
                var _this = this;
                this.$stateParams = $stateParams;
                this.MovieService = MovieService;
                this.$state = $state;
                console.log($stateParams['id']);
                MovieService.getMovie($stateParams['id']).then(function (result) {
                    _this.movie = result;
                }).catch(function (e) {
                    throw new Error(e);
                });
            }
            UpdateMovie.prototype.delete = function () {
                var _this = this;
                console.log('delete');
                this.MovieService.delete(this.movie).then(function (result) {
                    _this.$state.go('home');
                }).catch(function (e) {
                    throw new Error(e);
                });
            };
            UpdateMovie.prototype.update = function () {
                var _this = this;
                this.MovieService.update(this.movie).then(function (result) {
                    console.log(result);
                    _this.$state.go('home');
                }).catch(function (e) {
                    throw new Error(e);
                });
            };
            return UpdateMovie;
        }());
        Components.UpdateMovie = UpdateMovie;
        angular.module('imdb-clone').component(name, {
            templateUrl: template,
            controller: IMDbClone.Components.UpdateMovie,
            controllerAs: 'vm'
        });
    })(Components = IMDbClone.Components || (IMDbClone.Components = {}));
})(IMDbClone || (IMDbClone = {}));
