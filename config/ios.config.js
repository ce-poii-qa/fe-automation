const { config } = require('./wdio.config');
const IosInfo = require('./ios.info');
const path = require('path');

// Extend capabilities
config.capabilities = [
    {
        "platformName": "iOS",
        "appium:automationName": "xcuitest",
        "appium:deviceName": IosInfo.deviceName(),
        "appium:platformVersion": IosInfo.platFormVersion(),
        "appium:app": path.resolve(`./apps/ios/${IosInfo.appName()}`),
        "appium:autoAcceptAlerts": true
    }
];

config.specs = [
    './src/tests/ios/**/*.spec.js'
];

exports.config = config;