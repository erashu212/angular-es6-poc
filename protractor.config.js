'use strict';

exports.config = {
    specs: ['./e2e/**/*.js'],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:3000',
    frameworks: ['jasmine'],
    onPrepare: function () {
        browser.ignoreSynchronization = true;
    }
};