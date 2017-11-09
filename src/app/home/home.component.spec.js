
import  { HomeComponent } from './home.component.js';


let component;
let _homeService;

'use strict';

describe('SomeComponent', function() {

    beforeEach(function() {
        component = new HomeComponent();
    });

    it('should start with default counter value = 20', function () {
        expect(component.userTableParams).not.toBe(undefined);
    });

});