namespace IMDbClone.Components{

  const name = 'movieDetail';
  const template = './ngApp/components/movieDetails/movieDetail.html';


  export class MovieDetail{
      public movie;
    constructor(
      MovieService: IMDbClone.Services.MovieService,
      $stateParams: ng.ui.IStateParamsService
    ){
      MovieService.getMovie($stateParams['id']).then((result)=>{
      this.movie = result;
      }).catch((e)=>{
        throw new Error(e);
      })

    }
  }
  angular.module('imdb-clone').component(name,{
    templateUrl: template,
    controller: IMDbClone.Components.MovieDetail,
    controllerAs: 'vm'
  });
}
