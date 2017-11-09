import angular from 'angular';

import { SHARED_COMPONENTS, SHARED_DIRECTIVES } from './shared'

import routing from './app.config'

import { appComponent } from './app.component';

import { HomeModule } from './home';

const SHARED_MODULES = [
  'ngComponentRouter',
  'ngAnimate',
  HomeModule,
  SHARED_DIRECTIVES,
  SHARED_COMPONENTS
];

export default angular
  .module(window.MODULE_NAME, [ ...SHARED_MODULES ])
  .config(routing)
  .value('$routerRootComponent', 'app')
  .constant('API_END_POINT', 'https://jsonplaceholder.typicode.com')
  .component('app', appComponent)
  .name