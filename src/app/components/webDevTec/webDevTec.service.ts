export interface ITecThing {
  rank: number;
  title: string;
  url: string;
  description: string;
  logo: string;
}

export class WebDevTecService {
  public data: ITecThing[];

  public get tec(): ITecThing[] {
    return this.data;
  }

  /** @ngInject */
  constructor () {
    var rawData = [
      {
        'title': 'Bower',
        'url': 'http://bower.io/',
        'description': 'A package manager for the web.',
        'logo': 'bower.png'
      },
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'title': 'Bootstrap',
        'url': 'http://getbootstrap.com/',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'logo': 'bootstrap.png'
      },
      {
        'title': 'Angular UI Bootstrap',
        'url': 'http://angular-ui.github.io/bootstrap/',
        'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
        'logo': 'ui-bootstrap.png'
      },
      {
        'title': 'Sass (Node)',
        'url': 'https://github.com/sass/node-sass',
        'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
        'logo': 'node-sass.png'
      },
      {
        'title': 'TypeScript',
        'url': 'http://www.typescriptlang.org/',
        'description': 'TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
        'logo': 'typescript.png'
      },
      {
        'title': 'Typings',
        'url': 'https://github.com/typings/typings',
        'description': 'The manager for TypeScript definitions.',
        'logo': null
      }
    ];

    this.data = rawData.map((awesomeThing: ITecThing) => {
      awesomeThing.rank = Math.random();
      return awesomeThing;
    });
  }
}
