// Karma configuration
// Generated on Wed Jul 13 2016 23:43:48 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
    './node_modules/angular/angular.min.js',
    './node_modules/angular-mocks/angular-mocks.js',
    './node_modules/angular-ui-router/release/angular-ui-router.min.js',
    './js/libraries/backand.js',
    'https://npmcdn.com/leaflet@1.0.0-rc.2/dist/leaflet.js',
    './node_modules/angular-aria/angular-aria.js',                            
    './node_modules/angular-animate/angular-animate.js',                     
    './node_modules/angular-material/angular-material.js',                                
    './js/mainView.js',
    './js/factories/mainFactory.js',   
    './js/factories/api.js',
    './js/controllers/homeController.js',
    './js/controllers/signUpController.js',
    './js/controllers/loginController.js',
    './js/controllers/mapController.js',
    './js/controllers/mobileMenuController.js',
    './js/controllers/userPrefController.js',
    './js/controllers/test/parkALot.spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 3000,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
