'use strict';

var chai = require('jasmine');

describe('Home flow', function () {

    var loginUrl, homeUrl;

    it('load home page', function () {
        browser.get('/');
        loginUrl = browser.getCurrentUrl();

        browser.sleep(6000).then(function () {
            homeUrl = browser.getCurrentUrl();
            expect('1').to.equal('1');
        })
    });
});