import { WebDevTecService, ITecThing } from '../components/webDevTec/webDevTec.service';

export class MainController {
  public awesomeThings: ITecThing[];

  /** @ngInject */
  constructor (webDevTec: WebDevTecService) {
    this.awesomeThings = webDevTec.tec;
  }
}
