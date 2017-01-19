namespace IMDbClone.Components {
    //component config
    //movieCard translates to <movie-card movie="vm.movie"></movie-card>
    const name = 'auth';
    const template = '/ngApp/components/auth/auth.html';

    export class Auth {
        public user;
        public newUser;
        constructor(
            private UserService: IMDbClone.Services.UserService,
            private $state: ng.ui.IStateService,
            private Session: IMDbClone.Services.Session
        ) {
        }
        public login(user){
          this.UserService.login(user).then((res)=>{
            this.Session.create(res);
            this.$state.go('home');
          }).catch((err)=>{
            alert('bad login try again');
          });
        }

        public register(user){
          this.UserService.register(user).then((res)=>{
            this.$state.go('home');
          }).catch((err)=>{
            alert('registration error try again');
          })
        }
        public logout(){
          this.UserService.logout().then(()=>{
            this.Session.destroy();
            this.$state.go('home', null, {reload:true, notify:true});
          })
        }

    }
    angular.module('imdb-clone').component(name, {
        templateUrl: template,
        controller: IMDbClone.Components.Auth,
        controllerAs: 'vm'
    });
}
