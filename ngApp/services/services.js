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
            MovieService.prototype.update = function (movie) {
                return this.MovieResource.update({ id: movie._id }, movie).$promise;
            };
            MovieService.prototype.delete = function (movie) {
                return this.MovieResource.remove({ id: movie._id }).$promise;
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        var UserService = (function () {
            function UserService($resource) {
                this.$resource = $resource;
                this.LogoutResource = $resource('/api/logout/local');
                this.LoginResource = $resource('/api/login/local');
                this.RegisterResource = $resource('/api/Register');
                this.UserResource = $resource('/api/users/:id');
            }
            UserService.prototype.login = function (user) {
                console.log(user);
                return this.LoginResource.save(user).$promise;
            };
            UserService.prototype.logout = function () {
                return this.LogoutResource.get().$promise;
            };
            UserService.prototype.register = function (user) {
                return this.RegisterResource.save(user).$promise;
            };
            UserService.prototype.getCurrentUser = function () {
                return this.$resource('/api/currentuser').get().$promise;
            };
            return UserService;
        }());
        Services.UserService = UserService;
        var Session = (function () {
            function Session($sessionStorage) {
                this.$sessionStorage = $sessionStorage;
                this.user = this.getUser();
            }
            Session.prototype.create = function (user) {
                this.$sessionStorage['user'] = user;
            };
            Session.prototype.isAuthenticated = function () {
                var user = this.getUser();
                return !!user['username'];
            };
            Session.prototype.isAuthorized = function (roles) {
                var user = this.getUser();
                if (!user['roles']) {
                    return false;
                }
                if (!angular.isArray(roles)) {
                    roles = [roles];
                }
                return roles.some(function (v, k) {
                    for (var i in user['roles']) {
                        if (user['roles'][i] === v) {
                            return true;
                        }
                    }
                });
            };
            Session.prototype.getUser = function () {
                return this.$sessionStorage['user'] || {};
            };
            Session.prototype.destroy = function () {
                this.$sessionStorage.$reset();
                this.$sessionStorage['user'] = {};
            };
            return Session;
        }());
        Services.Session = Session;
        angular.module('imdb-clone').service('MovieService', MovieService);
        angular.module('imdb-clone').service('UserService', UserService);
        angular.module('imdb-clone').service('Session', Session);
    })(Services = IMDbClone.Services || (IMDbClone.Services = {}));
})(IMDbClone || (IMDbClone = {}));
