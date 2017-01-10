namespace IMDbClone.Components {
  //component config
  //boxerList translates to <boxer-list></boxer-list>
  const name = 'boxerList'
  const template = '/ngApp/components/boxerList/boxerList.html';

  export class BoxerList {
    public boxers;
    constructor(
      private BoxerService: IMDbClone.Services.BoxerService,
    ) {
      this.BoxerService.getBoxers()
        .then((data) => {
          this.boxers = data;
        }).catch((e) => {
          this.boxers = [];
          throw new Error(e);
        })
    }
  }

  angular.module('imdb-clone').component(name, {
    templateUrl: template,
    controller: IMDbClone.Components.BoxerList,
    controllerAs: 'vm'
  });
}
