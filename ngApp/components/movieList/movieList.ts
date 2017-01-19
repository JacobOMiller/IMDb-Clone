namespace IMDbClone.Components {
  //componet config
  //movieList translates to <movie-list></movie-list>
  const name = 'movieList';
  const template = '/ngApp/components/movieList/movieList.html';

  export class MovieList {
    public movies;
    public currentUser;
    constructor(
      private MovieService: IMDbClone.Services.MovieService,
      private Session: IMDbClone.Services.Session
    ){
      this.currentUser = Session.getUser();
      this.MovieService.getMovies()
      .then((data) => {
        this.movies = data;
      }).catch((e) => {
        this.movies = [];
        throw new Error(e);
      })
    }
  }
  angular.module('imdb-clone').component(name, {
    templateUrl: template,
    controller: IMDbClone.Components.MovieList,
    controllerAs: 'vm'
  });
}
