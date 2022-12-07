
const BaseScreen = require('./_screen');

class LandingScreen extends BaseScreen {

    async waitToFullyLoad () {
        return super.waitToFullyLoad(this.imageKumu);
    }
}

module.exports = new LandingScreen();
