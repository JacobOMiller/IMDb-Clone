namespace IMDbClone.Components {
    //component config
    //movieCard translates to <movie-card movie="vm.movie"></movie-card>
    const name = 'movieUpdate';
    const template = '/ngApp/components/movieUpdate/movieUpdate.html';

    export class UpdateMovie {
        public movie;
        constructor(
            private $stateParams,
            private MovieService: IMDbClone.Services.MovieService,
            private $state: ng.ui.IStateService
        ) {
          console.log($stateParams['id']);
          MovieService.getMovie($stateParams['id']).then((result)=>{
            this.movie = result;
          }).catch((e)=>{
            throw new Error(e);
          });
        }
        delete() {
          console.log('delete');
          this.MovieService.delete(this.movie).then((result) => {
              this.$state.go('home');
          }).catch((e) => {
              throw new Error(e);
          })
        }
        update() {
            this.MovieService.update(this.movie).then((result) => {
                console.log(result);
                this.$state.go('home');
            }).catch((e) => {
                throw new Error(e);
            })
        }

    }
    angular.module('imdb-clone').component(name, {
        templateUrl: template,
        controller: IMDbClone.Components.UpdateMovie,
        controllerAs: 'vm'
    });
}
