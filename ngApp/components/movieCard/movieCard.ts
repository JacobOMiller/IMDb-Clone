namespace IMDbClone.Components {
  //component config
  //movieCard translates to <movie-card movie="vm.movie"></movie-card>
  const name = 'movieCard'
  const template = '/ngApp/components/movieCard/movieCard.html';

  export class MovieCard {
    public movie;
    constructor(
      private MovieService: IMDbClone.Services.MovieService , private $state:ng.ui.IStateService
    ) {
    }

    submit() {
      this.MovieService.update(this.movie)
        .then((data) => {
          //null
        }).catch((e) => {
          throw new Error(e);
        })
    }
    goToDetails(id){
      this.$state.go('movies',{id: id});
    }
  }

  angular.module('imdb-clone').component(name, {
    templateUrl: template,
    controller: IMDbClone.Components.MovieCard,
    controllerAs: 'vm',
    bindings: {
      movie: '<'
    }
  });
}
