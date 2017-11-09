import angular from 'angular';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

const moduleName = `${window.MODULE_NAME}.home`;

export const HomeModule = angular
  .module(moduleName, [
    'ngTable'
  ])
  .component('home', HomeComponent)
  .service('homeService', HomeService)
  .name;