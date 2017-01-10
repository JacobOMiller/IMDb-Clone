namespace IMDbClone.Services {
  export class MovieService{
    public MovieResource;

    getMovies() {
      return this.MovieResource.query().$promise;
    }

    //TODO should be typed
    update(movie) {
      return this.MovieResource.update({id: movie._id}, movie).$promise;
    }

    constructor(
      $resource: ng.resource.IResourceService
    ) {
      this.MovieResource = $resource('/api/movies/:id', {id: '@id'}, { update: { method: 'put' }});
    }
  }

  angular.module('imdb-clone').service('MovieService', MovieService);
}
