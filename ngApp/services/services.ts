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

export class UserService{
  private LoginResource;
  private LogoutResource;
  private RegisterResource;
  private UserResource;

  public login(user){
    console.log(user);
    return this.LoginResource.save(user).$promise;
  }
  public logout(){
    return this.LogoutResource.get().$promise;
  }
  public register(user){
    return this.RegisterResource.save(user).$promise;
  }
  public getCurrentUser(){
    return this.$resource('/api/currentuser').get().$promise;
  }
  constructor(private $resource: ng.resource.IResourceService){
    this.LogoutResource= $resource('/api/logout/local');
    this.LoginResource= $resource('/api/login/local');
    this.RegisterResource= $resource('/api/Register');
    this.UserResource= $resource('/api/users/:id');
  }

}
export class Session{
  public user;
  constructor(
    private $sessionStorage: angular.ngstorage.IStorageService
  ) {
    this.user = this.getUser();
  }

  create(user){
    this.$sessionStorage['user'] = user;
  }

  isAuthenticated(){
    let user = this.getUser();
    return !!user['username'];
  }
  isAuthorized(roles){
    let user = this.getUser();
    if(!user['roles']){
      return false;
    }

    if(!angular.isArray(roles)){
      roles = [roles];
    }

    return roles.some((v, k)=>{
      for(let i in user['roles']){
        if(user['roles'] [i]=== v){
          return true;
        }
      }
    });
  }
  getUser(){
    return this.$sessionStorage['user']|| {};
  }
  destroy(){
    this.$sessionStorage.$reset();
    this.$sessionStorage['user']={};
  }

}

  angular.module('imdb-clone').service('MovieService', MovieService);
  angular.module('imdb-clone').service('UserService', UserService);
  angular.module('imdb-clone').service('Session', Session);

}
