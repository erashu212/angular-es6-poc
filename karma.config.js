const webpack = require('webpack');
const webpackConfig = require('./config/webpack.common.js');

module.exports = function (config) {
    config.set({
        basePath: './',
        frameworks: ['jasmine'],
        files: [
            'src/app/home/*.spec.js',
            'node_modules/angular-mocks/angular-mocks.js',
        ],
        preprocessors: {
            'src/app/home/*.spec.js': ['webpack']
        },
        webpack: {
            module: webpackConfig.module,
            plugins: webpackConfig.plugins
        },
        webpackMiddleware: {
            stats: 'errors-only'
        },
        notifyReporter: {
            reportEachFailure: true,
            reportSuccess: false
        },
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-webpack'
        ],
        browsers: ['PhantomJS']
    });
};