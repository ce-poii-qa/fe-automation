class IosInfo {
    static deviceName() {
        return 'iPhone 12';
    }
    static platFormVersion() {
        return '16.0'; 
    }

    static appName() {
        return 'wdio.app'; // pass the bundleid or ipa name
    }
}

module.exports = IosInfo;