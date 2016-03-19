interface IProjectsScope extends angular.IScope {
  extraValues: any[];
}

export function acmeMalarkey(): angular.IDirective {

  return {
    restrict: 'E',
    scope: {
      extraValues: '='
    },
    template: '&nbsp;',
    link: linkFunc,
    controller: MalarkeyController,
    controllerAs: 'vm'
  };

}

function linkFunc(scope: IProjectsScope, el: JQuery, attr: any, vm: MalarkeyController) {
  var typist = vm.malarkey(el[0], {
    typeSpeed: 40,
    deleteSpeed: 40,
    pauseDelay: 800,
    loop: true,
    postfix: ' '
  });

  el.addClass('acme-malarkey');

  angular.forEach(scope.extraValues, function(value: string) {
    typist.type(value).pause().delete();
  });
}

export class MalarkeyController {

  /** @ngInject */
  constructor(public malarkey: any) {
  }
}
