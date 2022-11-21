

const { config } = require('./wdio.config');
const AndroidInfo = require('./android.info');
const path = require('path');

// Extend capabilities
config.capabilities = [
    {
        "platformName": "Android",
        "appium:automationName": "uiautomator2",
        "appium:deviceName": AndroidInfo.deviceName(),
        "appium:platformVersion": AndroidInfo.platFormVersion(),
        "appium:app": path.resolve(`./apps/android/${AndroidInfo.appName()}`)
    }
];

config.specs = [
    './src/tests/android/**/*.spec.js'
];

exports.config = config;