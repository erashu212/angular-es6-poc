'use strict';

require('./home.component.css');

class HomeController {

  constructor(homeService, NgTableParams) {
    this.homeService = homeService;

    this.userTableParams = new NgTableParams({}, {
      getData: (params) => {
        // ajax request to api
        return this.homeService.getUsers().then(response => {
          params.total(response.length);
          return response;
        })
      }
    });
  }
}

HomeController.$inject = ['homeService', 'NgTableParams'];

export const HomeComponent = {
  controller: HomeController,
  template: require('./home.component.html')
}
