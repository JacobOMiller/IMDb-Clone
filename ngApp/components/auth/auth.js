var IMDbClone;
(function (IMDbClone) {
    var Components;
    (function (Components) {
        var name = 'auth';
        var template = '/ngApp/components/auth/auth.html';
        var Auth = (function () {
            function Auth(UserService, $state, Session) {
                this.UserService = UserService;
                this.$state = $state;
                this.Session = Session;
            }
            Auth.prototype.login = function (user) {
                var _this = this;
                this.UserService.login(user).then(function (res) {
                    _this.Session.create(res);
                    _this.$state.go('home');
                }).catch(function (err) {
                    alert('bad login try again');
                });
            };
            Auth.prototype.register = function (user) {
                var _this = this;
                this.UserService.register(user).then(function (res) {
                    _this.$state.go('home');
                }).catch(function (err) {
                    alert('registration error try again');
                });
            };
            Auth.prototype.logout = function () {
                var _this = this;
                this.UserService.logout().then(function () {
                    _this.Session.destroy();
                    _this.$state.go('home', null, { reload: true, notify: true });
                });
            };
            return Auth;
        }());
        Components.Auth = Auth;
        angular.module('imdb-clone').component(name, {
            templateUrl: template,
            controller: IMDbClone.Components.Auth,
            controllerAs: 'vm'
        });
    })(Components = IMDbClone.Components || (IMDbClone.Components = {}));
})(IMDbClone || (IMDbClone = {}));
