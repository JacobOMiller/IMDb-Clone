namespace IMDbClone.Services {
  export class MovieService{
    public MovieResource;

    getMovies() {
      return this.MovieResource.query().$promise;
    }

    getMovie(id){
      console.log(id);
      return this.MovieResource.get({id: id}).$promise;
    }
    postMovie(movie){
      return this.MovieResource.save(movie).$promise;
    }

    //TODO should be typed
    update(movie) {
      return this.MovieResource.update({id: movie._id}, movie).$promise;
    }
    delete(movie){
      return this.MovieResource.remove({id: movie._id}).$promise;
    }
    constructor(
      $resource: ng.resource.IResourceService
    ) {
      this.MovieResource = $resource('/api/movies/:id', {id: '@id'}, { update: { method: 'put' }});
    }
  }


  angular.module('imdb-clone').service('MovieService', MovieService);

  
}
