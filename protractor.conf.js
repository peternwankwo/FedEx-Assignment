// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  debug: false,
  allScriptsTimeout: 11000,
  specs: [
    //'./e2e/features/**/*.feature'
    './e2e/functional/**/*.ispec.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  allScriptsTimeout: 45000,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  //framework: 'custom',
  //frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  //cucumberOpts: {
  //  strict: true,
  // require: [
  //    './e2e/**/*.steps.ts'
  //  ],
  //  format: [
  //    'json:test-reports/cucumber-test-results.json'
  //  ]
  //},
  onPrepare() {
    'use strict';
    var Page = require('./e2e/page/page.js'); //Load the page files
    global.page = new Page(); //Create a new 
    //require('ts-node').register({
    //  project: require('path').join(__dirname, './e2e/tsconfig.e2e.json')
    //});

    const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
    
  }
};
