namespace IMDbClone.Components {
    //component config
    //movieCard translates to <movie-card movie="vm.movie"></movie-card>
    const name = 'createMovie';
    const template = '/ngApp/components/createmovie/createMovie.html';

    export class CreateMovie {
        public movie;
        constructor(
            private MovieService: IMDbClone.Services.MovieService, private $state: ng.ui.IStateService
        ) {
        }

        submit() {
            this.MovieService.postMovie(this.movie).then((result) => {
                console.log(result);
            }).catch((e) => {
                throw new Error(e);
            })
        }

    }
    angular.module('imdb-clone').component(name, {
        templateUrl: template,
        controller: IMDbClone.Components.CreateMovie,
        controllerAs: 'vm'
    });
}
