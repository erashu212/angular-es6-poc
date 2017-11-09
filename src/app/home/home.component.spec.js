const angular = require('angular');
const angular_mocks = require('angular-mocks');

describe('Home component', function () {
    beforeEach(angular.mock.module('myAPP'));

    // A simple test to verify the Users factory exists
    it('should exist', function () {
        expect(homeService).toBeDefined();
    });
});