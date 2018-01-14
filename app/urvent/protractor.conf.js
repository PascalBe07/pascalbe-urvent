// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  framework: 'jasmine',
  allScriptsTimeout: 10000,
  directConnect: true,
  baseUrl: 'http://localhost:10100/',
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    'shardTestFiles': true,
    'maxInstances': 5
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 3000,
    print: function() {}
  },
  beforeLaunch: function () {
    require('ts-node').register({
      project: 'e2e/tsconfig.json'
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter.SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
