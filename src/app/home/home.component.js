'use strict';

require('./home.component.css');

class HomeController {

  constructor(homeService, NgTableParams, $filter) {
    this.homeService = homeService;

    this.userTableParams = new NgTableParams({
      sorting: {
        userId: 'asc'
      }
    }, {
      getData: (params) => {
        // ajax request to api
        return this.homeService.getUsers().then(response => {
          const data = $filter('orderBy')(response, params.orderBy())
          params.total(response.length);
          return data;
        })
      }
    });
  }
}

HomeController.$inject = ['homeService', 'NgTableParams', '$filter'];

export const HomeComponent = {
  controller: HomeController,
  template: require('./home.component.html')
}
