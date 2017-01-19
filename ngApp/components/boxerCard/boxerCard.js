var IMDbClone;
(function (IMDbClone) {
    var Components;
    (function (Components) {
        var name = 'boxerCard';
        var template = '/ngApp/components/boxerCard/boxerCard.html';
        var BoxerCard = (function () {
            function BoxerCard(BoxerService) {
                this.BoxerService = BoxerService;
            }
            BoxerCard.prototype.submit = function () {
                this.BoxerService.update(this.boxer)
                    .then(function (data) {
                }).catch(function (e) {
                    throw new Error(e);
                });
            };
            return BoxerCard;
        }());
        Components.BoxerCard = BoxerCard;
        angular.module('imdb-clone').component(name, {
            templateUrl: template,
            controller: IMDbClone.Components.BoxerCard,
            controllerAs: 'vm',
            bindings: {
                boxer: '<'
            }
        });
    })(Components = IMDbClone.Components || (IMDbClone.Components = {}));
})(IMDbClone || (IMDbClone = {}));
